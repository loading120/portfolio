
## 1. Challenge overview

**Room:** TakeOver  
**Difficulty:** Easy  

**Skills demonstrated:**

- Subdomain enumeration
- DNS and CNAME analysis
- Understanding subdomain takeovers

**Tools used:**
- `Nmap`
- `gobuster` 
- `seclists`
- Browser + HTTP inspection
---

## 2. Objectives

- Enumerate subdomains for the target domain  
- Identify hidden subdomains   
- Confirm if the subdomains are valid  
- Finding the hidden flag

---

## 3. Methodology

### 3.1 Running a basic nmap scan

I started by running a basic Nmap scan to discover open ports and the service version:

```bash
sudo nmap -sV https://futurevera.com
```
From that scan i could determine that both port 80 and 443 were open

### 3.2 Enumarating subdomains

I used the tool gobuster to search for subdomains using the wordlist from seclists

```bash
gobuster vhost -u https://futurevera.thm -w /usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-20000.txt -k --append-domain
```
The result i got from this command was:
```bash
===============================================================
Gobuster v3.8.2
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                       https://futurevera.thm
[+] Method:                    GET
[+] Threads:                   10
[+] Wordlist:                  /usr/share/wordlists/seclists/Discovery/DNS/subdomains-top1million-20000.txt
[+] User Agent:                gobuster/3.8.2
[+] Timeout:                   10s
[+] Append Domain:             true
[+] Exclude Hostname Length:   false
===============================================================
Starting gobuster in VHOST enumeration mode
===============================================================
blog.futurevera.thm Status: 421 [Size: 408]
support.futurevera.thm Status: 421 [Size: 411]
Progress: 5583 / 19966 (27.96%)
```
I could see that gobuster found both blog and support as subdomains so I then added them to the ``` /etc/hosts ``` file to see what we could then find out.

### 3.3 Looking through certificates

I entered in the support subdomain into my web browser and veiwed the certificate:

![Result](images/certificate_for_support.futurevera.thm.png)




