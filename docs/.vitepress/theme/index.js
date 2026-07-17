import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute()

    const setupLightbox = () => {
      if (typeof window === 'undefined') return

      let modal = document.getElementById('lightbox-modal')
      if (!modal) {
        modal = document.createElement('div')
        modal.id = 'lightbox-modal'
        modal.className = 'lightbox-modal'
        modal.innerHTML = `
          <span class="lightbox-close" title="Close Overlay">&times;</span>
          <div class="lightbox-zoom-controls">
            <button class="lightbox-zoom-btn zoom-in" title="Zoom In">+</button>
            <button class="lightbox-zoom-btn zoom-out" title="Zoom Out">&minus;</button>
            <button class="lightbox-zoom-btn zoom-reset" title="Reset Zoom">1:1</button>
          </div>
          <img class="lightbox-content" id="lightbox-img" alt="Zoomed view" />
        `
        document.body.appendChild(modal)

        let scale = 1.0
        let translateX = 0
        let translateY = 0
        let isDragging = false
        let startX = 0
        let startY = 0

        const img = modal.querySelector('#lightbox-img')

        const updateTransform = () => {
          img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`
          img.style.cursor = scale > 1.0 ? (isDragging ? 'grabbing' : 'grab') : 'default'
        }

        const resetZoom = () => {
          scale = 1.0
          translateX = 0
          translateY = 0
          updateTransform()
        }

        // Close when clicking the close button or background overlay
        modal.addEventListener('click', (e) => {
          if (e.target.id === 'lightbox-modal' || e.target.classList.contains('lightbox-close')) {
            modal.style.display = 'none'
            document.body.style.overflow = ''
            resetZoom()
          }
        })

        // Zoom controls
        modal.querySelector('.zoom-in').addEventListener('click', (e) => {
          e.stopPropagation()
          scale = Math.min(scale + 0.25, 5.0)
          updateTransform()
        })

        modal.querySelector('.zoom-out').addEventListener('click', (e) => {
          e.stopPropagation()
          scale = Math.max(scale - 0.25, 0.5)
          if (scale <= 1.0) {
            translateX = 0
            translateY = 0
          }
          updateTransform()
        })

        modal.querySelector('.zoom-reset').addEventListener('click', (e) => {
          e.stopPropagation()
          resetZoom()
        })

        // Dragging / Panning
        img.addEventListener('mousedown', (e) => {
          e.stopPropagation()
          e.preventDefault()
          if (scale > 1.0) {
            isDragging = true
            startX = e.clientX - translateX
            startY = e.clientY - translateY
            updateTransform()
          }
        })

        window.addEventListener('mousemove', (e) => {
          if (isDragging) {
            translateX = e.clientX - startX
            translateY = e.clientY - startY
            updateTransform()
          }
        })

        window.addEventListener('mouseup', () => {
          if (isDragging) {
            isDragging = false
            updateTransform()
          }
        })

        // Wheel Zoom
        modal.addEventListener('wheel', (e) => {
          e.preventDefault()
          const zoomFactor = e.deltaY < 0 ? 1.15 : 0.85
          const newScale = Math.min(Math.max(scale * zoomFactor, 0.5), 5.0)
          
          if (newScale !== scale) {
            scale = newScale
            if (scale <= 1.0) {
              translateX = 0
              translateY = 0
            }
            updateTransform()
          }
        }, { passive: false })
      }

      // Close modal on Escape key press
      const handleKeyDown = (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
          modal.style.display = 'none'
          document.body.style.overflow = ''
          const resetBtn = modal.querySelector('.zoom-reset')
          if (resetBtn) resetBtn.click()
        }
      }
      window.removeEventListener('keydown', handleKeyDown)
      window.addEventListener('keydown', handleKeyDown)

      // Add click handler to all documentation images
      const handleImageClick = (e) => {
        const target = e.target
        if (target.tagName === 'IMG' && target.closest('.vp-doc') && !target.classList.contains('no-zoom')) {
          const lightboxImg = document.getElementById('lightbox-img')
          if (lightboxImg && modal) {
            lightboxImg.src = target.src
            modal.style.display = 'flex'
            document.body.style.overflow = 'hidden' // Lock background scrolling
            const resetBtn = modal.querySelector('.zoom-reset')
            if (resetBtn) resetBtn.click()
          }
        }
      }

      document.body.removeEventListener('click', handleImageClick)
      document.body.addEventListener('click', handleImageClick)
    }

    onMounted(() => {
      setupLightbox()
    })

    watch(
      () => route.path,
      () => {
        // Ensure overlay is closed on route change
        const modal = document.getElementById('lightbox-modal')
        if (modal) {
          modal.style.display = 'none'
          document.body.style.overflow = ''
          const resetBtn = modal.querySelector('.zoom-reset')
          if (resetBtn) resetBtn.click()
        }
      }
    )
  }
}