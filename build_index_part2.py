#!/usr/bin/env python3
"""Write redesigned personal site index.html with web-yeseo visual patterns."""

content = []
def W(text):
    content.append(text)

W(r"""<!DOCTYPE html>
<html lang="en">
<!--
    You found this portfolio. Thanks:

          ()  )
         ( ) (
       .-------.
       |       |]
       '-------'
         | |
         | |
         | |
       __| |__
      '       '

    Built with web-yeseo design patterns.
    Free, fast, and made with coffee.
-->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ryan Restivo — Product Leader, AI Innovator, Builder</title>
  <meta name="description" content="Product leader & creator building AI tools that solve real problems. Founder of YESEO (Serving 650+ newsrooms), AI Innovator-in-Residence at WVU, and former Director of Product at Newsday.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ryan Restivo",
      "jobTitle": "Product Leader & AI Innovator",
      "description": "Product leader and creator at the intersection of AI, mobile platforms, and technology workflows. Founder of YESEO, AI Innovator-in-Residence at West Virginia University, and former Director of Product at Newsday.",
      "url": "https://ryanrestivo.github.io",
      "email": "ryan.restivo@gmail.com",
      "sameAs": ["https://linkedin.com/in/ryanrestivo","https://twitter.com/ryanarestivo","https://github.com/ryanrestivo"],
      "worksFor": {"@type":"CollegeOrUniversity","name":"West Virginia University","department":"Media Innovation Center"},
      "knowsAbout": ["AI","Product Management","Mobile Platforms","Workflow Automation","Developer Tools","Data Journalism"]
    }
  </script>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=.9em