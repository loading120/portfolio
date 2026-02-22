import { defineConfig } from 'vitepress';

export default defineConfig({
    base: '/portfolio/',
    themeConfig:{
        siteTitle:"portfolio",
        sidebar:{
            '/':[
                {
                    text:'kali',
                    collapsed:true,
                    items: [
                        {text: 'Dual Boot',link:'/kali/dual-boot/'}
                    ]
                },
                {
                    text:'Try Hack me',
                    collapsed:true,
                    items: [
                        {
                            text: 'Challenges',
                            collapsed: true,
                            items: [
                                { text: 'Take over', link: '/try_hack_me/challenges/take_over/' },
                                { text: 'MD2PDF', link: '/try_hack_me/challenges/MD2PDF/' }
                  
                            ]
                        }

                    ]
                },
                {
                    text:'Portswigger academy',
                    collapsed:true,
                    items: [
                        {
                            text: 'File upload vulnerabilities',
                            collapsed: true,
                            items: [
                                { text: 'Remote code execution via web shell upload', link: '/portswigger_academy/file_upload_vulnerabilities/remote_code_execution_via_web_shell_upload/' },
                  
                            ]
                        }

                    ]
                }
            ]
        }
    }
})
