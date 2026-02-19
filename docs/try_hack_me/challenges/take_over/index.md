
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

### 3.2 Using gobuster to enumerate the subdoamins
