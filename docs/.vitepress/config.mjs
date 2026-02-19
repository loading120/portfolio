import { defineConfig } from 'vitepress';

export default defineConfig({
    base: '/portfolio/',
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
                },
                {
                    text:'Try Hack me',
                    collapsed:false,
                    items: [
                        {
                            text: 'Challenges',
                            collapsed: true,
                            items: [
                                { text: 'Take over', link: '/try_hack_me/challenges/take_over/' }
                  
                            ]
                        }

                    ]
                }
            ]
        }
    }
})
