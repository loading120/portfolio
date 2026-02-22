# Remote Code Execution via Web Shell Upload
*PortSwigger Academy – Lab Documentation*

## 1. Overview
This lab demonstrates how insecure file upload functionality can lead to remote code execution (RCE). The website allows users to import an avatar for their account and this is the area we are going to try and exploit

## 2. Learning Objectives
- Understand insecure file upload vulnerabilities      
- Upload a malicious script file  
- Execute arbitrary system commands remotely  

## 3. Tools used
- Burp suite

## Recon & Initial Observations
During initial exploration of the site:

- The application provides an image upload feature  
- The server appears to validate file extensions but not file content  
- Uploaded files are accessible from a predictable directory  
- Error messages reveal how the server handles invalid uploads  

These behaviours suggest the upload mechanism may be vulnerable.

## Attack Strategy
1. Intercept the upload request using Burp Suite  
2. Modify the filename to use a script extension (e.g., `.php`)  
3. Adjust the `Content-Type` header if necessary  
4. Upload a simple web shell  
5. Access the uploaded file directly to trigger command execution  

## Payload Used
Example PHP web shell:

```php
<?php echo system($_GET['cmd']); ?>
