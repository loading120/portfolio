# Web shell upload via path traversal
*Portswigger Academy*

## 1. Overview
This lab contains a vulnerable image upload function. The server is configured to prevent execution of user-supplied files, but this restriction can be bypassed by exploiting a secondary vulnerability. 

## 2. Learning Objectives
- Understand directory traversal sequences
- Understand how to decode/encode URL
- Understand how to navigate through directories

## 3. Tools Used
- Burp Suite
- URL encoder/decoder 

## 4. Reconnaissance & Initial Observations
Describe:
- The application includes an image upload feature intended for user avatars or similar content.
- Uploaded files are stored in a predictable directory such as /images/ or /files/.
- It accepts common traverseries such as ../

## 5. Execution
- The first thing I did was to upload my php shell with the upload feature:

![](images/uploading_shell.png)

- I then opened Burp Suite and had a look at the POST request:

![](images/viewing_POST_request.png)

- I used an online url encoder to encode the command ```../``` and then entered it into my POST request:
- This was necessary because encoding the traversal sequence allowed it to bypass any superficial filtering and instruct the server to write the file outside of  the intended directory.

![](images/URL_encoded.png)

- I then saw that it had uploaded with ```../``` which was a very good sign that the traversal command had worked:

![](images/upload_confirmed.png)

- I then viewed the GET request and used the cmd command to access the secret file in /files:

![](images/change_GET_request.png)

- I sent the request and it worked:

![](images/flag.png)



## 6. Key Findings
- user controlled file-names are trusted by the server
- server side validation of file type is weak
- Executable file extensions are not filtered

## 7. Conclusion
- Overall this lab was a good lesson in helping me understand the importance of server-side validation of file types which can allow attackers to manipulate the upload path and place executable files in senstitve directories.

