# K. Nisitha — Professional Developer Portfolio

A modern, responsive, recruiter-friendly personal developer portfolio website built for **K. Nisitha** (B.Tech Information Technology Student & Aspiring Software Developer).

Designed with a premium dark theme, purple (`#A855F7`) and electric blue (`#3B82F6`) gradients, elegant glassmorphism, responsive navigation, and performance-first architecture.

---

## 🌟 Features & Highlights

- **Hero Section**:
  - Live animated typing effect cycling through roles: *Aspiring Software Developer*, *B.Tech IT Student*, *Web Development Enthusiast*.
  - Smooth call-to-action buttons (*Explore My Projects* & *Download Resume*).
  - Real profile photograph integration with tailored CSS framing and glowing gradient border.
  - Social media and direct contact links (GitHub, LinkedIn, Email, Phone).
- **About Me**:
  - Professional summary highlighting technical interests, problem-solving mindset, and continuous learning.
  - 4 quick-glance metric cards (Degree, Expected Graduation 2028, CGPA 8.31, Location).
- **Academic Qualifications (Education)**:
  - Timeline cards detailing B.Tech IT at Adithya Institute of Technology, Higher Secondary (12th: 480/600), and Secondary School (10th: 403/500).
- **Organized Technical Skills**:
  - Categorized under Programming (Java, Python Basics), Frontend (HTML, CSS, JavaScript), Backend (Node.js), Databases (MongoDB, MySQL), and Tools (Git, GitHub).
- **Curated Projects Showcase**:
  - Interactive category filter tabs (All, Web Applications, In Progress, Practice Projects).
  - Dynamic rendering via `js/projects.js` with structured data.
  - Clear, honest status badges: *Practice Project* with genuine GitHub link for **Smart Student Performance Tracker** (`https://github.com/KNisitha/Smart-Student-Performance-Tracker`), *Concept Prototype* with genuine GitHub link for **Evently** (`https://github.com/KNisitha/evently`), *Practice Project* for **Watch Store** and **To-Do List**, and *Current* for **Portfolio Website**.
  - No fake live demo links or invented repositories.
- **Internship Experience**:
  - Web Development Intern at Digidara Technologies, Trichy (15 Days).
- **Certifications**:
  - Internship Certificate — Digidara Technologies.
  - NPTEL — The Joy of Computing using Python.
- **Activities & Achievements**:
  - Hackathon Participant, Project Expo, Tech Quest, and Bug Boundary.
- **Contact & Communication**:
  - Direct email, phone, location, GitHub, and LinkedIn info.
  - Interactive contact form with client-side field validation, honest `mailto:` pre-population, and one-click clipboard copying.
- **Accessibility & Responsiveness**:
  - Semantic HTML5, accessible SVG icons, keyboard navigation focus indicators, and `prefers-reduced-motion` support.
  - Fully responsive across mobile screens (<480px), tablets (768px-880px), laptops (1024px), and large monitors.

---

## 📁 Project Structure

```text
portfolio/
├── index.html                  # Main semantic HTML5 webpage
├── README.md                   # Setup, customization, and deployment guide
├── css/
│   ├── style.css               # Design tokens, variables, typography, glassmorphism, components
│   └── responsive.css          # Responsive breakpoints and accessibility overrides
├── js/
│   ├── projects.js             # Structured project data and category filtering logic
│   └── script.js               # Typing animation, mobile menu, scroll spy, contact form, fallback handlers
├── assets/
│   ├── images/
│   │   └── nisitha-profile.jpg # Profile photograph
│   └── Nisitha_Resume.pdf      # Resume PDF for direct download
└── public/
    └── assets/
        └── Nisitha_Resume.pdf  # Deployment-ready asset path for static hosts
```

---

## 🚀 How to Run Locally

Because this project uses vanilla **HTML5, CSS3, and JavaScript**, there are **no build steps, node_modules, or package managers required**.

### Option 1: Direct Browser Launch
Double-click `index.html` or right-click and choose **Open With -> Chrome / Edge / Firefox**.

### Option 2: VS Code Live Server
1. Open the `portfolio` folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Click **"Go Live"** in the bottom status bar or right-click `index.html` -> **Open with Live Server**.
4. The site will open at `http://127.0.0.1:5500`.

### Option 3: Python Built-in Web Server
If you have Python installed, open your terminal inside the `portfolio` folder and run:
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 📸 Profile Photo Management

- **Current Location**: `assets/images/nisitha-profile.jpg`
- **Recommended dimensions**: Portrait photo (e.g. 1200x1600 or 800x1000).
- **Crop Adjustment**:
  The CSS in `css/style.css` uses:
  ```css
  .profile-img {
    object-fit: cover;
    object-position: 50% 30%; /* Adjust vertical percentage (0% = top, 50% = middle, 100% = bottom) */
  }
  ```
- If you update your photo, replace `assets/images/nisitha-profile.jpg` with your new image. If the image fails to load, a graceful placeholder displaying your initials ("KN") appears automatically.

---

## 📄 Resume PDF Integration

- **Current Locations**:
  - `assets/Nisitha_Resume.pdf` (for direct relative links)
  - `public/assets/Nisitha_Resume.pdf` (for Vite/Next/Vercel public directory conventions)
- Both "Download Resume" buttons (Hero and Footer) link to this PDF with `download="Nisitha_Resume.pdf"`.
- To update your resume:
  Replace the PDF at `assets/Nisitha_Resume.pdf` and `public/assets/Nisitha_Resume.pdf` keeping the same filename.

---

## 🛠️ Adding Missing Project Repositories or Live Links

All project data is stored in [`js/projects.js`](file:///c:/Users/Nisitha/Desktop/portfolio/js/projects.js).

When you upload or publish a repository for Watch Store or To-Do List:
1. Open `js/projects.js`.
2. Locate the project object (e.g., `id: "watch-store"`).
3. Replace `githubUrl: null` with your real repository URL:
   ```javascript
   githubUrl: "https://github.com/KNisitha/watch-store",
   ```
4. If you deploy a live demo, set:
   ```javascript
   liveDemoUrl: "https://watch-store-demo.vercel.app",
   ```
5. Save the file. The card will automatically update its buttons!

---

## 🖼️ Adding Real Project Screenshots

To display project screenshots instead of CSS-generated illustrations:
1. Place your screenshot inside `assets/images/` (e.g. `assets/images/evently-preview.png`).
2. In `index.html` (or `js/projects.js`), replace the `.thumb-illustration` container with an `<img>` tag:
   ```html
   <img src="assets/images/evently-preview.png" alt="Evently Preview" class="project-screenshot">
   ```
3. Add the following CSS rule if needed:
   ```css
   .project-screenshot {
     width: 100%;
     height: 100%;
     object-fit: cover;
   }
   ```

---

## 📬 Contact Form Configuration Options

The contact form currently uses an honest client-side validation handler with a pre-filled `mailto:` link, guaranteeing zero fake submissions or misleading "message sent" notifications.

If you want the form to send messages silently in the background:
### Option A: Formspree (Free & Easy)
1. Register at [formspree.io](https://formspree.io) and create a form.
2. Update the `<form>` tag in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option B: Web3Forms
1. Generate an access key at [web3forms.com](https://web3forms.com).
2. Insert a hidden input inside `<form>`:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
   ```

---

## 🌐 Deployment Instructions

### 1. Deploying with GitHub Pages
1. Initialize git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   ```
2. Create a new repository on your GitHub account (`https://github.com/KNisitha/portfolio`).
3. Connect your remote repository and push:
   ```bash
   git remote add origin https://github.com/KNisitha/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings > Pages**.
5. Under **Build and deployment**, select `Deploy from a branch` and choose the `main` branch with `/ (root)` folder.
6. Click **Save**. Your site will be live at `https://knisitha.github.io/portfolio/`.

### 2. Deploying with Vercel
1. Sign in to [vercel.com](https://vercel.com) using your GitHub account.
2. Click **"Add New Project"** and select your portfolio repository.
3. Keep default settings (Framework Preset: *Other*) and click **Deploy**.
4. Your portfolio will receive a custom `.vercel.app` domain with free SSL.

### 3. Deploying with Netlify
1. Sign in to [netlify.com](https://netlify.com).
2. Drag and drop the `portfolio` folder directly into the Netlify drop zone, or import from GitHub.
3. Your portfolio is immediately deployed worldwide.

---

## 📄 License & Credits
- **Designed & Developed for**: K. Nisitha
- **Copyright**: &copy; 2026 K. Nisitha. All rights reserved.
