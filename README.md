<img width="1360" height="708" alt="image" src="https://github.com/user-attachments/assets/ddcf0eb0-926e-4da3-9e3c-29c56d07728c" />
<img width="1347" height="707" alt="image" src="https://github.com/user-attachments/assets/cdc1f44e-7780-4fa6-a9f2-862892f08ef7" />
<img width="1358" height="709" alt="image" src="https://github.com/user-attachments/assets/c60f8498-1a59-48b8-b184-6251821da11b" />
<img width="1355" height="707" alt="image" src="https://github.com/user-attachments/assets/119ca171-e0a2-4bcc-b63f-c812a34ea108" />
<img width="1348" height="707" alt="image" src="https://github.com/user-attachments/assets/92e77ee2-2fa1-44fb-a660-109f4ce52866" />
<img width="1350" height="704" alt="image" src="https://github.com/user-attachments/assets/c3495d15-7fb1-47bc-8d38-a72b8a8caadd" />
<img width="1346" height="704" alt="image" src="https://github.com/user-attachments/assets/b395f1fd-21db-43e5-afac-e889a2d8b85d" />
<img width="1357" height="656" alt="image" src="https://github.com/user-attachments/assets/6de2759e-6241-40b7-9363-11b7b53b7b40" />
<img width="1358" height="707" alt="image" src="https://github.com/user-attachments/assets/8df0edf3-432c-4150-b421-0ef5ed054698" />
<img width="671" height="445" alt="image" src="https://github.com/user-attachments/assets/960d6131-4613-4851-9334-7d6e24f98228" />
<img width="1360" height="758" alt="image" src="https://github.com/user-attachments/assets/8bdc36c2-0e49-476c-8700-c6ea53a31e5c" />
<img width="1348" height="699" alt="image" src="https://github.com/user-attachments/assets/afbac65d-3ddb-4b10-a678-5356edb2ac9d" />
# Data Science Academy Landing Page

This project is a fully responsive, modern landing page for the **Data Science Academy**, built to match a client-provided mockup pixel-for-pixel. It showcases key sections like the Hero, 4IR Leaders, Tech Solutions, Team Overview, Learn Data Science, Partnerships, and a Footer Call-to-Action, complete with interactive icons and a contact form.

---

## 📄 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Folder Structure](#folder-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Creating & Customizing the Contact Form](#creating--customizing-the-contact-form)
8. [License](#license)

---

## 📝 Project Overview

The client provided a high-fidelity mockup of a vibrant, colorful landing page intended to “empower future tech leaders.” Our goal was to **replicate** the design exactly using semantic HTML5 and modern CSS (Flexbox & Grid), ensure full responsiveness, and add interactive behaviors (hover states, smooth scrolling, clickable icons).

---

## ✨ Features

* **Hero Section**

  * Full-screen splash image (`hero.png`)
  * Clickable overlay icons that smoothly scroll to page sections
* **Responsive Navigation Bar**

  * Sticky at top, adaptive menu items, and gradient “Apply” button
* **4IR Leaders**

  * Two-column layout with circular illustration
* **Tech Solutions**

  * Side-by-side text & graphic with bold typography
* **Team Overview**

  * Circular headshots in a flex grid
* **Learn Data Science**

  * Banner image with call-to-action button
* **Partnerships**

  * Frosted-glass card with stacked logos and drop-shadows
* **Footer CTA**

  * Two-column layout reusing the hero image
  * Interactive “Contact Us” button
* **Smooth Scroll**

  * `scroll-behavior: smooth;` for in-page anchor links
* **Mobile-First Responsiveness**

  * Flex and Grid layouts gracefully collapse on smaller viewports

---

## 🛠 Tech Stack

* **HTML5**
* **CSS3** (Flexbox, CSS Grid, Custom Properties)
* **No JavaScript frameworks**—only minimal vanilla JS for icon click animations

---

## 📁 Folder Structure

```


---

## 🚀 Installation

1. **Clone** this repository

   ```bash
   git clone https://github.com/your-username/data-science-academy-landing.git
   cd data-science-academy-landing
   ```
2. **Open** `index.html` in your browser
   No extra build tools or package managers are required!

---

## ⚙️ Usage

* Edit **content** in `index.html` to update text, section order, or to add new sections.
* Swap out images in `assets/images/` (keep filename references consistent).
* Tweak **styles** in `assets/styles.css` for colors, typography, or layout changes.

---

## 📝 Creating & Customizing the Contact Form

If you’d like to convert the “CONTACT US” link into a working form:

1. **Add a form** in the footer:

   ```html
 <form action="/submit" method="POST" class="contact-form">
   <input type="email" name="email" placeholder="Your email" required/>
   <textarea name="message" rows="4" placeholder="Your message" required></textarea>
   <button type="submit" class="submit-btn">Send Message</button>
 </form>
   ```

2. **Style** the form in `styles.css`:

 ```css
 .contact-form {
   display: flex;
   flex-direction: column;
   gap: 1rem;
   max-width: 400px;
   margin-top: 2rem;
 }
 .contact-form input,
 .contact-form textarea {
   padding: 0.75rem;
   border-radius: 8px;
   border: none;
   font-size: 1rem;
 }
 .submit-btn {
   background: linear-gradient(to right, #bd48ff, #ff748c);
   color: #fff;
   padding: 12px;
   border: none;
   border-radius: 20px;
   font-weight: bold;
   cursor: pointer;
 }
   ```

3. **Backend handling**

 * Hook `action="/submit"` up to your server or a form-handling service (e.g. Formspree, Netlify Forms).

---



