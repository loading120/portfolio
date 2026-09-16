# PortSwigger Web Security Academy

Documentation and lab solutions from the PortSwigger Web Security Academy, focusing on web application vulnerabilities, HTTP request manipulation, and exploitation techniques using Burp Suite.

---

## File Upload Vulnerabilities

File upload flaws occur when a web server allows users to upload files to its filesystem without properly validating their name, type, contents, or size.

* **[Remote Code Execution via Web Shell Upload](/portswigger_academy/file_upload_vulnerabilities/remote_code_execution_via_web_shell_upload/)**
  Uploading an unrestricted `.php` shell payload to execute arbitrary commands on the target host.

* **[Web Shell Upload via Content-Type Restriction Bypass](/portswigger_academy/file_upload_vulnerabilities/web_shell_upload_via_content-Type_restriction_bypass/)**
  Intercepting upload requests to spoof `Content-Type: image/jpeg` headers while submitting executable PHP code.

* **[Web Shell Upload via Path Traversal](/portswigger_academy/file_upload_vulnerabilities/web_shell_upload_via_path_traversal/)**
  Leveraging directory traversal sequences (`..%2f`) in filename parameters to upload webshells outside of restricted execution directories.

* **[Web Shell Upload via Extension Blacklist Bypass](/portswigger_academy/file_upload_vulnerabilities/web_shell_upload_via_extension_blacklist_bypass/)**
  Overriding server configuration files (`.htaccess`) or leveraging secondary executable extensions (`.php5`, `.phtml`) to bypass extension filters.

* **[Web Shell Upload via Obfuscated File Extension](/portswigger_academy/file_upload_vulnerabilities/web_shell_upload_via_obfuscated_file_extension/)**
  Bypassing upload validators using null-byte injection (`%00`), URL encoding tricks, and polyglot file extensions.
