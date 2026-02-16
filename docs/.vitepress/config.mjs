import { defineConfig } from 'vitepress';

export default defineConfig({
    themeConfig:{
        siteTitle:"portfolio",
        sidebar:{
            '/':[
                {
                    text:'kali',
                    collapsed:false,
                    items: [
                        {text: 'Dual Boot',link:'kali/dual-boot/'}
                    ]
                }
            ]
        }
    }
})
