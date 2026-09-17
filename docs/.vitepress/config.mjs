import { defineConfig } from 'vitepress';

export default defineConfig({
    base: '/portfolio/',
    title: "Charlie | Security Portfolio",
    description: "Cybersecurity portfolio covering reverse engineering, offensive security, CTF writeups, and web application security.",
    themeConfig: {
        siteTitle: "Charlie | Security Portfolio",
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Malware & Security Tooling', link: '/kali/' },
            { text: 'TryHackMe Labs', link: '/try_hack_me/' },
            { text: 'PortSwigger', link: '/portswigger_academy/' },
            { text: 'Cloud Security', link: '/cloud_security/' },
            { text: 'Blog', link: '/blogs/' }
        ],
        sidebar: {
            '/kali/': [
                {
                    text: 'Malware & Security Tooling',
                    items: [
                        { text: 'Section Overview', link: '/kali/' },
                        { text: 'Dual Boot Setup', link: '/kali/dual-boot/' },
                        {
                            text: 'Malware & Tools',
                            collapsed: false,
                            items: [
                                { text: 'Meterpreter Reverse TCP', link: '/kali/malware/meterpreter_reverse_tcp/' },
                                { text: 'Port Scanner Tool', link: '/kali/malware/port_threading/' }
                            ]
                        }
                    ]
                }
            ],
            '/try_hack_me/': [
                {
                    text: 'TryHackMe Labs',
                    items: [
                        { text: 'Section Overview', link: '/try_hack_me/' },
                        {
                            text: 'Reverse Engineering',
                            collapsed: false,
                            items: [
                                { text: 'Basic Malware RE', link: '/try_hack_me/reverse_engineering/basic_malware_re/' },
                                { text: 'Dear QA', link: '/try_hack_me/reverse_engineering/dear_qa/' }
                            ]
                        },
                        {
                            text: 'Web Exploitation',
                            collapsed: false,
                            items: [
                                { text: 'Pickle Rick', link: '/try_hack_me/web_exploitation/pickle_rick/' }
                            ]
                        },
                        {
                            text: 'Privilege Escalation',
                            collapsed: false,
                            items: [
                                { text: 'Agent T', link: '/try_hack_me/privelege_escalation/agent_t/' }
                            ]
                        },
                        {
                            text: 'Server Side Template Injection',
                            collapsed: false,
                            items: [
                                { text: 'MD2PDF', link: '/try_hack_me/server-side_template_injections/MD2PDF/' }
                            ]
                        },
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
                            text: 'Subdomain Takeover',
                            collapsed: true,
                            items: [
                                { text: 'Take Over', link: '/try_hack_me/subdomain-takeover/take_over/' }
                            ]
                        },
                        {
                            text: 'OSINT',
                            collapsed: true,
                            items: [
                                { text: 'Operation Slither', link: '/try_hack_me/OSINT/operation_slither/' }
                            ]
                        }
                    ]
                }
            ],
            '/portswigger_academy/': [
                {
                    text: 'PortSwigger Web Security',
                    items: [
                        { text: 'Section Overview', link: '/portswigger_academy/' },
                        {
                            text: 'File Upload Vulnerabilities',
                            collapsed: false,
                            items: [
                                { text: 'RCE via Web Shell Upload', link: '/portswigger_academy/file_upload_vulnerabilities/remote_code_execution_via_web_shell_upload/' },
                                { text: 'Content-Type Bypass', link: '/portswigger_academy/file_upload_vulnerabilities/web_shell_upload_via_content-Type_restriction_bypass/' },
                                { text: 'Path Traversal Bypass', link: '/portswigger_academy/file_upload_vulnerabilities/web_shell_upload_via_path_traversal/' },
                                { text: 'Extension Blacklist Bypass', link: '/portswigger_academy/file_upload_vulnerabilities/web_shell_upload_via_extension_blacklist_bypass/' },
                                { text: 'Obfuscated Extension Bypass', link: '/portswigger_academy/file_upload_vulnerabilities/web_shell_upload_via_obfuscated_file_extension/' }
                            ]
                        }
                    ]
                }
            ],
            '/cloud_security/': [
                {
                    text: 'Cloud Security',
                    items: [
                        { text: 'Overview & Notes', link: '/cloud_security/' },
                        { text: 'S3 Bucket & Access Logging', link: '/cloud_security/s3_bucket_logs/' }
                    ]
                }
            ],
            '/blogs/': [
                {
                    text: 'Blog & Articles',
                    items: [
                        { text: 'Overview', link: '/blogs/' }
                    ]
                }
            ]
        },
        socialLinks: [],
        footer: {
            message: 'Cybersecurity Notes & Technical Writeups',
            copyright: 'Charlie'
        }
    }
});
