const topics = [
  {
    title: "INFORMATION GATHERING",
    subtopics: [
      {
        title: "Open Source Reconnaissance",
        content: [
          {
            type: "data",
            data: "Perform Google Dorks search",
            links: [
              {
                name: "Github",
                url: "https://github.com/cipher387/Dorks-collections-list"
              },
              {
                name: "Github",
                url: "https://gist.github.com/sundowndev/283efaddbcf896ab405488330d1bbc06"
              }
            ],
            type: "data",
            point: [
              "Google Dorks are advanced search queries used to find specific information or vulnerabilities in websites by exploiting Google's search engine operators."
            ]
          },
          {
            type: "data",
            data: "Perform OSINT",
            links: [
              {
                name: "Website",
                url: "https://osintframework.com/"
              },
              {
                name: "Github",
                url: "https://github.com/ciscocsirt/GOSINT?tab=readme-ov-file"
              },
              {
                name: "Website",
                url: "https://www.social-searcher.com/"
              },
              {
                name: "Website",
                url: "https://exifinfo.org/"
              },
            ],
            type: "data",
            point: ["Search for the target on social media platforms",
              "Search for the target on job portals",
            ]
          }
        ]
      },
      {
        title: "Fingerprinting Web Server",
        content: [
          {
            type: "data",
            data: "Find the type of Web Server and Find the version details of the Web Server",
            links: [
              {
                name: "Website",
                url: "https://www.whatwebservice.com/"
              },
            ],
          },
          {
            type: "examples",
            examples: [
              {
                title: "Banner Grabbing",
                data: ["Banner grabbing is the most common technique to gather information from a web server. This can include the HTTP headers, error messages, or any visible output returned by the server.",
                  "Tools: Telnet/Netca , Nmap, Telnet, etc.",
                ],
                code: [`nc <target-ip> \n 80 GET / HTTP/1.1 \n Host: <target-domain> or  <target-ip>`,
                  `curl -I <target-url> | Burp Suite: A web vulnerability scanner that can inspect HTTP traffic in detail `]
              },
              {
                title: "Nmap",
                code: [`nmap -sV <target-ip>`,
                  `nmap -sV --script=http-server-header <target-ip>`,
                  `nmap -sV --script=http-enum <target-ip>`,
                  `nmap -sV --script=http-headers <target-ip>`,
                ]
              },
              {
                title: "Fingerprinting Through Error Messages",
                data: ["Error messages can be a valuable source of information. They can reveal the web server type, version, and even the operating system."]
              },
              {
                title: "Using Specialized Tools for Web Server Fingerprinting",
                data: ["Tools like WhatWeb, Wappalyzer, BuiltWith, etc., can be used to identify the web server type and version."],
                code: ["whatweb (target-url)",
                  `Wappalyzer : browser extension `
                ]
              },
            ],
          },
        ],
      },
      {
        title: "Looking For Metafiles",
        content: [
          {
            type: "data",
            data: "Metafiles are files that contain metadata about the web server, such as the server version, installed modules, and configuration files.",
          },
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "View the Robots.txt file",
                  "View the Sitemap.xml file",
                  "View the Humans.txt file",
                  "View the Security.txt file"
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Enumerating Web Server’s Applications",
        content: [
          {
            type: "data",
            data: "Enumerating a web server’s applications can help identify potential vulnerabilities and entry points.",
          },
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Enumerating with Nmap",
                  "Enumerating with Netcat",
                  "Perform a DNS lookup",
                  "Perform a Reverse DNS lookup"
                ]
              }
            ],
          }
        ]
      },
      {
        title: "Review The Web Contents",
        content: [
          {
            type: "data",
            data: "Reviewing the web content involves inspecting pages for sensitive information, hidden data, or potential security risks.",
          },
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Inspect the page source for sensitive info",
                  "Try to find Sensitive Javascript codes",
                  "Try to find any keys",
                  "Make sure the autocomplete is disabled"
                ]
              }
            ],
          }
        ]
      },
      {
        title: "Identifying Application’s Entry Points",
        content: [
          {
            type: "data",
            data: "Identifying the entry points in an application helps determine the attack surface and where vulnerabilities may exist.",
          },
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Identify what the methods used are?",
                  "Identify where the methods used are?",
                  "Identify the Injection point"
                ]
              }
            ],
          }
        ]
      },
      {
        title: "Mapping Execution Paths",
        content: [
          {
            type: "data",
            data: "Mapping execution paths allows you to understand how data flows through an application and potential attack vectors.",
          },
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Use Burp Suite",
                  "Use Dirsearch",
                  "Use Gobuster"
                ]
              }
            ],
          }
        ]
      },
      {
        title: "Fingerprint Web Application Framework",
        content: [
          {
            type: "data",
            data: "Fingerprinting the web application framework helps identify technologies used by the site that could have known vulnerabilities.",
          },
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Use the Wappalyzer browser extension",
                  "Use Whatweb",
                  "View URL extensions",
                  "View HTML source code",
                  "View the cookie parameter",
                  "View the HTTP headers"
                ]
              }
            ],
          }
        ]
      },
      {
        title: "Map Application Architecture",
        content: [
          {
            type: "data",
            data: "Mapping the application architecture provides a clearer picture of the site's structure, helping identify points of weakness.",
          },
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Map the overall site structure"
                ]
              }
            ],
          }
        ]
      }
    ]
  },
  {
    title: "CONFIGURATION & DEPLOYMENT MANAGEMENT TESTING",
    subtopics: [
      {
        title: "Test Network Configuration",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Check the network configuration",
                  "Check for default settings",
                  "Check for default credentials",
                ]
              }
            ],
          }
        ],
      },

      {
        title: "Test Application Configuration",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure only required modules are used",
                  "Ensure unwanted modules are disabled",
                  "Ensure the server can handle DOS",
                  "Check how the application is handling 4xx & 5xx errors",
                  "Check for the privilege required to run",
                  "Check logs for sensitive info"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test File Extension Handling",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure the server won’t return sensitive extensions",
                  "Ensure the server won’t accept malicious extensions",
                  "Test for file upload vulnerabilities"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Review Backup & Unreferenced Files",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure unreferenced files don’t contain any sensitive info",
                  "Ensure the namings of old and new backup files",
                  "Check the functionality of unreferenced pages"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Enumerate Infrastructure & Admin Interfaces",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Try to find the Infrastructure Interface",
                  "Try to find the Admin Interface",
                  "Identify the hidden admin functionalities"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Testing HTTP Methods",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Discover the supported methods",
                  "Ensure the PUT method is disabled",
                  "Ensure the OPTIONS method is disabled",
                  "Test access control bypass",
                  "Test for XST attacks",
                  "Test for HTTP method overriding"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test HSTS",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure HSTS is enabled"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test RIA Cross Domain Policy",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Check for Adobe’s Cross Domain Policy",
                  "Ensure it has the least privilege"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test File Permission",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure the permissions for sensitive files",
                  "Test for directory enumeration"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Subdomain Takeover",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test DNS, A, and CNAME records for subdomain takeover",
                  "Test NS records for subdomain takeover",
                  "Test 404 response for subdomain takeover"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test Cloud Storage",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Check the sensitive paths of AWS",
                  "Check the sensitive paths of Google Cloud",
                  "Check the sensitive paths of Azure"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "IDENTITY MANAGEMENT TESTING",
    subtopics: [
      {
        title: "Test Role Definitions",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test for forced browsing",
                  "Test for IDOR (Insecure Direct Object Reference)",
                  "Test for parameter tampering",
                  "Ensure low privilege users can’t access high privilege resources"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test User Registration Process",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure the same user or identity can’t register again and again",
                  "Ensure the registrations are verified",
                  "Ensure disposable email addresses are rejected",
                  "Check what proof is required for successful registration"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test Account Provisioning Process",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Check the verification for the provisioning process",
                  "Check the verification for the de-provisioning process",
                  "Check the provisioning rights for an admin user to other users",
                  "Check whether a user is able to de-provision themself or not",
                  "Check for the resources of a de-provisioned user"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Testing For Account Enumeration",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Check the response when a valid username and password are entered",
                  "Check the response when a valid username and an invalid password are entered",
                  "Check the response when an invalid username and password are entered",
                  "Ensure the rate-limiting functionality is enabled in username and password fields"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Weak Username Policy",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Check the response for both valid and invalid usernames",
                  "Check for username enumeration"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "AUTHENTICATION TESTING",
    subtopics: [
      {
        title: "Test For Un-Encrypted Channel",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Check for the HTTP login page",
                  "Check for the HTTP register or sign-in page",
                  "Check for HTTP forgot password page",
                  "Check for HTTP change password",
                  "Check for resources on HTTP after logout",
                  "Test for forced browsing to HTTP pages"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Default Credentials",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test with default credentials",
                  "Test organization name as credentials",
                  "Test for response manipulation",
                  "Test for the default username and a blank password",
                  "Review the page source for credentials"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Weak Lockout Mechanism",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure the account has been locked after 3-5 incorrect attempts",
                  "Ensure the system accepts only the valid CAPTCHA",
                  "Ensure the system rejects the invalid CAPTCHA",
                  "Ensure CAPTCHA code regenerated after reloaded",
                  "Ensure CAPTCHA reloads after entering the wrong code",
                  "Ensure the user has a recovery option for a lockout account"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Bypassing Authentication Schema",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test forced browsing directly to the internal dashboard without login",
                  "Test for session ID prediction",
                  "Test for authentication parameter tampering",
                  "Test for SQL injection on the login page",
                  "Test to gain access with the help of session ID",
                  "Test multiple logins allowed or not?"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Vulnerable Remember Password",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure that the stored password is encrypted",
                  "Ensure that the stored password is on the server-side"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Browser Cache Weakness",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure proper cache-control is set on sensitive pages",
                  "Ensure no sensitive data is stored in the browser cache storage"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Weak Password Policy",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure the password policy is set to strong",
                  "Check for password reusability",
                  "Check the user is prevented from using his username as a password",
                  "Check for the usage of common weak passwords",
                  "Check the minimum password length to be set",
                  "Check the maximum password length to be set"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Testing For Weak Security Questions",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Check for the complexity of the questions",
                  "Check for brute-forcing"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Weak Password Reset Function",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Check what information is required to reset the password",
                  "Check for password reset function with HTTP",
                  "Test the randomness of the password reset tokens",
                  "Test the uniqueness of the password reset tokens",
                  "Test for rate limiting on password reset tokens",
                  "Ensure the token must expire after being used",
                  "Ensure the token must expire after not being used for a long time"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Weak Password Change Function",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Check if the old password is asked to make a change",
                  "Check for the uniqueness of the forgotten password",
                  "Check for blank password change",
                  "Check for password change function with HTTP",
                  "Ensure the old password is not displayed after changed",
                  "Ensure the other sessions got destroyed after the password change"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Weak Authentication In Alternative Channel",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test authentication on desktop browsers",
                  "Test authentication on mobile browsers",
                  "Test authentication in a different country",
                  "Test authentication in a different language",
                  "Test authentication on desktop applications",
                  "Test authentication on mobile applications"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "AUTHORIZATION TESTING",
    subtopics: [
      {
        title: "Testing Directory Traversal File Include",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Identify the injection point on the URL",
                  "Test for Local File Inclusion",
                  "Test for Remote File Inclusion",
                  "Test Traversal on the URL parameter",
                  "Test Traversal on the cookie parameter",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Testing Traversal With Encoding",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test Traversal with Base64 encoding",
                  "Test Traversal with URL encoding",
                  "Test Traversal with ASCII encoding",
                  "Test Traversal with HTML encoding",
                  "Test Traversal with Hex encoding",
                  "Test Traversal with Binary encoding",
                  "Test Traversal with Octal encoding",
                  "Test Traversal with Gzip encoding",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Testing Traversal With Different OS Schemes",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test Traversal with Unix schemes",
                  "Test Traversal with Windows schemes",
                  "Test Traversal with Mac schemes",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Test Other Encoding Techniques",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test Traversal with Double encoding",
                  "Test Traversal with all characters encode",
                  "Test Traversal with only special characters encode",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Test Authorization Schema Bypass",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test for Horizontal authorization schema bypass",
                  "Test for Vertical authorization schema bypass",
                  "Test override the target with custom headers",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Test For Privilege Escalation",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Identify the injection point",
                  "Test for bypassing the security measures",
                  "Test for forced browsing",
                  "Test for IDOR",
                  "Test for parameter tampering to high privileged user",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Test For Insecure Direct Object Reference",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test to change the ID parameter",
                  "Test to add parameters at the endpoints",
                  "Test for HTTP parameter pollution",
                  "Test by adding an extension at the end",
                  "Test with outdated API versions",
                  "Test by wrapping the ID with an array",
                  "Test by wrapping the ID with a JSON object",
                  "Test for JSON parameter pollution",
                  "Test by changing the case",
                  "Test for path traversal",
                  "Test by changing words",
                  "Test by changing methods",
                ]
              }
            ],
          }
        ],
      }
    ]
  },
  {
    title: "SESSION MANAGEMENT TESTING",
    subtopics: [
      {
        title: "Test For Session Management Schema",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure all Set-Cookie directives are secure",
                  "Ensure no cookie operation takes place over an unencrypted channel",
                  "Ensure the cookie can’t be forced over an unencrypted channel",
                  "Ensure the HTTPOnly flag is enabled",
                  "Check if any cookies are persistent",
                  "Check for session cookies and cookie expiration date/time",
                  "Check for session fixation",
                  "Check for concurrent login",
                  "Check for session after logout",
                  "Check for session after closing the browser",
                  "Try decoding cookies (Base64, Hex, URL, etc)",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Test For Cookie Attributes",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure the cookie must be set with the secure attribute",
                  "Ensure the cookie must be set with the path attribute",
                  "Ensure the cookie must have the HTTPOnly flag",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Test For Session Fixation",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure new cookies have been issued upon a successful authentication",
                  "Test manipulating the cookies",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Test For Exposed Session Variables",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test for encryption",
                  "Test for GET and POST vulnerabilities",
                  "Test if GET request incorporating the session ID used",
                  "Test by interchanging POST with GET method",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Test For Back Refresh Attack",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test after password change",
                  "Test after logout",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Test For Cross Site Request Forgery",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Check if the token is validated on the server-side or not",
                  "Check if the token is validated for full or partial length",
                  "Check by comparing the CSRF tokens for multiple dummy accounts",
                  "Check CSRF by interchanging POST with GET method",
                  "Check CSRF by removing the CSRF token parameter",
                  "Check CSRF by removing the CSRF token and using a blank parameter",
                  "Check CSRF by using unused tokens",
                  "Check CSRF by replacing the CSRF token with its own values",
                  "Check CSRF by changing the content type to form-multipart",
                  "Check CSRF by changing or deleting some characters of the CSRF token",
                  "Check CSRF by changing the referrer to Referrer",
                  "Check CSRF by changing the host values",
                  "Check CSRF alongside clickjacking",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Test For Logout Functionality",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Check the logout function on different pages",
                  "Check for the visibility of the logout button",
                  "Ensure after logout the session was ended",
                  "Ensure after logout we can’t access the dashboard by pressing the back button",
                  "Ensure proper session timeout has been set",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Test For Session Timeout",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure there is a session timeout exists",
                  "Ensure after the timeout, all of the tokens are destroyed",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Test For Session Puzzling",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Identify all the session variables",
                  "Try to break the logical flow of the session generation",
                ]
              }
            ],
          }
        ],
      },
      {
        title: "Test For Session Hijacking",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test session hijacking on target that doesn’t have HSTS enabled",
                  "Test by login with the help of captured cookies",
                ]
              }
            ],
          }
        ],
      }
    ]
  },
  {
    title: "INPUT VALIDATION TESTING",
    subtopics: [
      {
        title: "Test For Reflected Cross Site Scripting",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure these characters are filtered <>’’&””",
                  "Test with a character escape sequence",
                  "Test by replacing < and > with HTML entities &lt; and &gt;",
                  "Test payload with both lower and upper case",
                  "Test to break firewall regex by new line /r/n",
                  "Test with double encoding",
                  "Test with recursive filters",
                  "Test injecting anchor tags without whitespace",
                  "Test by replacing whitespace with bullets",
                  "Test by changing HTTP methods"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Stored Cross Site Scripting",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Identify stored input parameters that will reflect on the client side",
                  "Look for input parameters on the profile page",
                  "Look for input parameters on the shopping cart page",
                  "Look for input parameters on the file upload page",
                  "Look for input parameters on the settings page",
                  "Look for input parameters on the forum, comment page",
                  "Test uploading a file with XSS payload as its file name",
                  "Test with HTML tags"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For HTTP Parameter Pollution",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Identify the backend server and parsing method used",
                  "Try to access the injection point",
                  "Try to bypass the input filters using HTTP Parameter Pollution"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For SQL Injection",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test SQL Injection on authentication forms",
                  "Test SQL Injection on the search bar",
                  "Test SQL Injection on editable characteristics",
                  "Try to find SQL keywords or entry point detections",
                  "Try to inject SQL queries",
                  "Use tools like SQLmap or Hackbar",
                  "Use Google dorks to find the SQL keywords",
                  "Try GET based SQL Injection",
                  "Try POST based SQL Injection",
                  "Try COOKIE based SQL Injection",
                  "Try HEADER based SQL Injection",
                  "Try SQL Injection with null bytes before the SQL query",
                  "Try SQL Injection with URL encoding",
                  "Try SQL Injection with both lower and upper cases",
                  "Try SQL Injection with SQL Tamper scripts",
                  "Try SQL Injection with SQL Time delay payloads",
                  "Try SQL Injection with SQL Conditional delays",
                  "Try SQL Injection with Boolean based SQL",
                  "Try SQL Injection with Time based SQL"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For LDAP Injection",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Use LDAP search filters",
                  "Try LDAP Injection for access control bypass"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Testing For XML Injection",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Check if the application is using XML for processing",
                  "Identify the XML Injection point by XML metacharacter",
                  "Construct XSS payload on top of XML"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Server Side Includes",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Use Google dorks to find the SSI",
                  "Construct RCE on top of SSI",
                  "Construct other injections on top of SSI",
                  "Test Injecting SSI on login pages, header fields, referrer, etc"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For XPATH Injection",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Identify XPATH Injection point",
                  "Test for XPATH Injection"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For IMAP SMTP Injection",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Identify IMAP SMTP Injection point",
                  "Understand the data flow",
                  "Understand the deployment structure of the system",
                  "Assess the injection impact"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Local File Inclusion",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Look for LFI keywords",
                  "Try to change the local path",
                  "Use LFI payload list",
                  "Test LFI by adding a null byte at the end"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Remote File Inclusion",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Look for RFI keywords",
                  "Try to change the remote path",
                  "Use RFI payload list"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Command Injection",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Identify the Injection points",
                  "Look for Command Injection keywords",
                  "Test Command Injection using different delimiters",
                  "Test Command Injection with payload list",
                  "Test Command Injection with different OS commands"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Format String Injection",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Identify the Injection points",
                  "Use different format parameters as payloads",
                  "Assess the injection impact"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Host Header Injection",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test for HHI by changing the real Host parameter",
                  "Test for HHI by adding X-Forwarded Host parameter",
                  "Test for HHI by swapping the real Host and X-Forwarded Host parameter",
                  "Test for HHI by adding two Host parameters",
                  "Test for HHI by adding the target values in front of the original values",
                  "Test for HHI by adding the target with a slash after the original values",
                  "Test for HHI with other injections on the Host parameter",
                  "Test for HHI by password reset poisoning"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Server Side Request Forgery",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Look for SSRF keywords",
                  "Search for SSRF keywords only under the request header and body",
                  "Identify the Injection points",
                  "Test if the Injection points are exploitable",
                  "Assess the injection impact"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Server Side Template Injection",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Identify the Template injection vulnerability points",
                  "Identify the Templating engine",
                  "Use the tplmap to exploit"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "ERROR HANDLING TESTING",
    subtopics: [
      {
        title: "Test For Improper Error Handling",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Identify the error output",
                  "Analyze the different outputs returned",
                  "Look for common error handling flaws",
                  "Test error handling by modifying the URL parameter",
                  "Test error handling by uploading unrecognized file formats",
                  "Test error handling by entering unrecognized inputs",
                  "Test error handling by making all possible errors"
                ]
              }
            ]
          }
        ]
      }

    ]
  },
  {
    title: "WEAK CRYPTOGRAPHY TESTING",
    subtopics: [
      {
        title: "Test For Weak Transport Layer Security",
        content: [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test for DROWN weakness on SSLv2 protocol",
                  "Test for POODLE weakness on SSLv3 protocol",
                  "Test for BEAST weakness on TLSv1.0 protocol",
                  "Test for FREAK weakness on export cipher suites",
                  "Test for Null ciphers",
                  "Test for NOMORE weakness on RC4",
                  "Test for LUCKY 13 weakness on CBC mode ciphers",
                  "Test for CRIME weakness on TLS compression",
                  "Test for LOGJAM on DHE keys",
                  "Ensure the digital certificates should have at least 2048 bits of key length",
                  "Ensure the digital certificates should have at least SHA-256 signature algorithm",
                  "Ensure the digital certificates should not use MD5 and SHA-1",
                  "Ensure the validity of the digital certificate",
                  "Ensure the minimum key length requirements",
                  "Look for weak cipher suites"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "BUSINESS LOGIC TESTING",
    subtopics: [
      {
        title: "Test For Business Logic",
        "content": [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Identify the logic of how the application works",
                  "Identify the functionality of all the buttons",
                  "Test by changing the numerical values into high or negative values",
                  "Test by changing the quantity",
                  "Test by modifying the payments",
                  "Test for parameter tampering"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Malicious File Upload",
        "content": [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Test malicious file upload by uploading malicious files",
                  "Test malicious file upload by putting your IP address on the file name",
                  "Test malicious file upload by right to left override",
                  "Test malicious file upload by encoded file name",
                  "Test malicious file upload by XSS payload on the file name",
                  "Test malicious file upload by RCE payload on the file name",
                  "Test malicious file upload by LFI payload on the file name",
                  "Test malicious file upload by RFI payload on the file name",
                  "Test malicious file upload by SQL payload on the file name",
                  "Test malicious file upload by other injections on the file name",
                  "Test malicious file upload by inserting the payload inside of an image using the bmp.pl tool",
                  "Test malicious file upload by uploading large files (leads to DOS)"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "CLIENT SIDE TESTING",
    subtopics: [
      {
        title: "Test For DOM Based Cross Site Scripting",
        "content": [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Try to identify DOM sinks",
                  "Build payloads to that DOM sink type"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For URL Redirect",
        "content": [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Look for URL redirect parameters",
                  "Test for URL redirection on domain parameters",
                  "Test for URL redirection by using a payload list",
                  "Test for URL redirection by using a whitelisted word at the end",
                  "Test for URL redirection by creating a new subdomain with the same name as the target",
                  "Test for URL redirection by XSS",
                  "Test for URL redirection by profile URL flaw"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Cross Origin Resource Sharing",
        "content": [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Look for 'Access-Control-Allow-Origin' on the response",
                  "Use the CORS HTML exploit code for further exploitation"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Clickjacking",
        "content": [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure 'X-Frame-Options' headers are enabled",
                  "Exploit with iframe HTML code for POC"
                ]
              }
            ]
          }
        ]
      }
    ]

  },
  {
    title: "OTHER COMMON ISSUES",
    subtopics: [
      {
        title: "Test For No-Rate Limiting",
        "content": [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure rate limiting is enabled",
                  "Try to bypass rate limiting by changing the case of the endpoints",
                  "Try to bypass rate limiting by adding / at the end of the URL",
                  "Try to bypass rate limiting by adding HTTP headers",
                  "Try to bypass rate limiting by adding HTTP headers twice",
                  "Try to bypass rate limiting by adding Origin headers",
                  "Try to bypass rate limiting by IP rotation",
                  "Try to bypass rate limiting by using null bytes at the end",
                  "Try to bypass rate limiting by using race conditions"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For EXIF Geodata",
        "content": [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure the website is stripping the geodata",
                  "Test with EXIF checker"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Broken Link Hijack",
        "content": [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure there are no broken links",
                  "Test broken links by using the blc tool"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For SPF",
        "content": [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Ensure the website is having SPF record",
                  "Test SPF by nslookup command"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Weak 2FA",
        "content": [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Try to bypass 2FA by using poor session management",
                  "Try to bypass 2FA via the OAuth mechanism",
                  "Try to bypass 2FA via brute-forcing",
                  "Try to bypass 2FA via response manipulation",
                  "Try to bypass 2FA by using activation links to login",
                  "Try to bypass 2FA by using status code manipulation",
                  "Try to bypass 2FA by changing the email or password",
                  "Try to bypass 2FA by using a null or empty entry",
                  "Try to bypass 2FA by changing the boolean into false",
                  "Try to bypass 2FA by removing the 2FA parameter on the request"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Test For Weak OTP Implementation",
        "content": [
          {
            type: "examples",
            examples: [
              {
                title: "Example",
                code: [
                  "Try to bypass OTP by entering the old OTP",
                  "Try to bypass OTP by brute-forcing",
                  "Try to bypass OTP by using a null or empty entry",
                  "Try to bypass OTP by response manipulation",
                  "Try to bypass OTP by status code manipulation"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
];

export default topics;      
