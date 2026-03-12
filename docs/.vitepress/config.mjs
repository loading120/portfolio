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
                            text: 'Cryptography',
                            collapsed: true,
                            items: [
                                { text: 'W1seguy', link: '/try_hack_me/cryptography/w1seguy/' }
                  
                            ]
                        },
                        {
                            text: 'Directory Traversal',
                            collapsed: true,
                            items: [
                                { text: 'Corridor', link: '/try_hack_me/directory_traversal/corridor/' }
                  
                            ]
                        },
                        {
                            text: 'Privelege Escalation',
                            collapsed: true,
                            items: [
                                { text: 'Agent T', link: '/try_hack_me/privelege_escalation/agent_t/' }
                  
                            ]
                        },
                        {
                            text: 'Server Side Template Injections',
                            collapsed: true,
                            items: [
                                { text: 'MD2PDF', link: '/try_hack_me/server-side_template_injections/MD2PDF/' }
                  
                            ]
                        },
                        {
                            text: 'Subdomain Takeover',
                            collapsed: true,
                            items: [
                                { text: 'Take Over', link: '/try_hack_me/subdomain-takeover/take_over/' }
                  
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
                                { text: 'Web shell upload via Content-Type restriction bypass', link: '/portswigger_academy/file_upload_vulnerabilities/web_shell_upload_via_content-Type_restriction_bypass/' },
                                { text: 'Web shell upload via path traversal', link: '/portswigger_academy/file_upload_vulnerabilities/web_shell_upload_via_path_traversal/' },
                                { text: 'Web shell upload via extension blacklist bypass', link: '/portswigger_academy/file_upload_vulnerabilities/web_shell_upload_via_extension_blacklist_bypass/' },
                                { text: 'Web shell upload via obfuscated file extension', link: '/portswigger_academy/file_upload_vulnerabilities/web_shell_upload_via_obfuscated_file_extension/' }
                  
                            ]
                        }

                    ]
                }
            ]
        }
    }
})
