Portfolio

Welcome to my personal portfolio website, showcasing my skills, projects, and experience as a Frontend Developer. Built with modern web technologies, this portfolio highlights my expertise in creating responsive, user-friendly, and visually appealing web applications.

Table of Contents

Overview

Features

Technologies Used

Project Structure

Getting Started

Usage

Contributing

License

Contact

Overview

This portfolio is a single-page application (SPA) designed to present my professional journey, including my projects, technical skills, and contact information. It features a clean, modern design with smooth animations, a responsive layout, and an interactive project showcase. Key projects, such as the JK Engineering website and contributions to the Tepnot web chat app, are highlighted to demonstrate my real-world experience.

Features

Responsive Design: Fully optimized for desktop, tablet, and mobile devices.

Project Showcase: Displays featured and non-featured projects with live demos, tech stacks, and optional GitHub links for public repositories.

Interactive Filtering: Filter projects by technology in the Projects section.

Contact Form: Allows visitors to send messages directly (integrated with Formspree for email delivery).

Smooth Scrolling: Enhanced navigation with smooth scrolling and scroll-spy functionality.

Downloadable Resume: Provides a link to download my resume in PDF format.

Modern UI Components: Custom buttons and cards with hover effects and animations using Tailwind CSS and Framer Motion.

Technologies Used

Frontend: React, Vite, Tailwind CSS, Framer Motion, Lucide Icons

Tools: ESLint, Postman, Figma, Vercel (for deployment)

Other Libraries: WebSocket (for past projects), Redux (optional, based on project needs)

Assets: Custom SVGs for tech stack icons, optimized images for project screenshots

PORTFOLIO
├── public/
│ ├── favicon.ico
│ ├── Manish Gohil Frontend Dev Resume.pdf
│ └── vite.svg
├── src/
│ ├── assets/
│ │ ├── images/
│ │ │ ├── jkengg-screenshot.jpg
│ │ │ ├── portfolio screenshot.jpg
│ │ │ └── tepnot.jpg
│ │ ├── react.svg
│ │ └── svgs/
│ │ ├── bootstrap.svg
│ │ ├── css.svg
│ │ ├── figma.svg
│ │ ├── framer.svg
│ │ ├── github.svg
│ │ ├── html.svg
│ │ ├── javaScript.svg
│ │ ├── mui.svg
│ │ ├── next.svg
│ │ ├── postman.svg
│ │ ├── react.svg
│ │ ├── redux.svg
│ │ ├── sass.svg
│ │ ├── tailwindCSS.svg
│ │ ├── vercel.svg
│ │ └── vite.svg
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Footer.jsx
│ │ │ ├── Header.jsx
│ │ │ └── Navigation.jsx
│ │ ├── sections/
│ │ │ ├── About.jsx
│ │ │ ├── Contact.jsx
│ │ │ ├── Hero.jsx
│ │ │ └── Projects.jsx
│ │ └── ui/
│ │ ├── Button.jsx
│ │ └── Card.jsx
│ ├── data/
│ │ └── projects.js
│ ├── hooks/
│ │ └── useScrollSpy.js
│ ├── utils/
│ │ └── smoothScroll.js
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitattributes
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

Getting Started

To run this portfolio locally, follow these steps:

Prerequisites

Node.js (v16 or higher)

npm (v8 or higher)

Installation

Clone the repository:
git clone https://github.com/yourusername/portfolio.git
cd portfolio

Install dependencies:
npm install

Running Locally

Start the development server:
npm run dev
Open your browser and navigate to http://localhost:5173 to view the portfolio.

Usage

Navigation: Use the header navigation to jump to sections (Hero, About, Projects, Contact).

Projects: Filter projects by technology (e.g., React, Next.js) or view all. Click “Live Demo” to visit project websites.

Contact: Fill out the contact form to send a message. Submissions are sent to the email configured via Formspree.

Resume: Download my resume from the Hero or About section (linked to public/Manish Gohil Frontend Dev Resume.pdf).

Contributing

This is a personal portfolio, so contributions are not actively sought. However, if you have suggestions or find issues, feel free to open an issue or submit a pull request on the GitHub repository.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

Email: manishgohil.work.00@gmail.com

LinkedIn: https://www.linkedin.com/in/manish-gohil-ba861a295/

GitHub: https://github.com/MG-work00

Portfolio: https://portfolio-fawn-iota-31.vercel.app/

Feel free to reach out via the contact form on the portfolio or through the above channels. I’m open to collaboration, freelance opportunities, or discussing potential projects!
