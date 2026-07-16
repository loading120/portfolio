# Dear QA

## 1. Summary
- Purpose of analysis: To identify whether the DearQA binary contains a memory corruption vulnerability and determine if it can be exploited to gain a reverse shell through a port.

- What the binary appears to do: It prints a welcome message, asks for the user’s name, and then echoes it back.

- Final conclusion: The binary contains a classic stack‑based buffer overflow due to an unsafe iso_scanf call, allowing control of RIP and therefore redirection to the vuln() function to gain access to a reverse shell by the vuln() function calling /bin/bash.

---

## 2. Basic Info
- File type: ELF 64‑bit LSB executable

- Architecture: x86_64

- Stripped: No

---

## 3. Static Analysis

- Noteable Imports: iso_scanf, printf
- Notable functions: Main, Vuln
- Suspicious Patterns: Use of iso_scanf("%s", buffer) with no length restriction
Stack variable at offset -0x28 (40 bytes)
No stack canaries
No PIE (static addresses → easier exploitation)

---

## 4. Dynamic Analysis
- Execution behaviour
- Syscalls (strace)
- Library calls (ltrace)
- Debugger notes (breakpoints, register changes)

---

## 5. Core Logic
- Key algorithm or check
- Important variables
- Pseudocode snippet

---

## 6. Result
- What the binary actually does
- Crackme solution / malware behaviour summary

---

## 7. Notes
- Issues encountered
- Things to revisit
- Lessons learned
