# ------------------------------------------
# Omkar Mahesh - Personal Portfolio Project
# ------------------------------------------

# This is the repository for my personal portfolio website, designed to showcase my skills, 
# experience, and projects as an aspiring DevOps Engineer and Full-Stack Developer.
# The portfolio is a clean, modern, single-page application built with HTML, Tailwind CSS, 
# and vanilla JavaScript.

[Live Demo]: # (Link to your deployed portfolio)

---

### > FEATURES

- **Fully Responsive Design:** Looks great on all devices, from mobile phones to desktops.
- **Dark/Light Mode:** A theme toggle to switch between dark and light modes, with the user's preference saved in local storage.
- **Dynamic Content:** All personal data is stored in a single JavaScript object for easy updates.
- **Interactive Skill Matrix:** Skills are displayed in a "bento box" grid with hover-to-reveal proficiency details.
- **Animated Timelines:** Experience and education are presented in a vertical timeline that animates on scroll.
- **Scroll-Reveal Animations:** Elements subtly fade and slide into view.
- **Integrated Contact Options:** Includes direct contact info and a link to a Google Form for formal inquiries.

---

### > TECH_STACK

# This portfolio is built with a focus on simplicity and performance, using only front-end technologies:

- **HTML5:** For the core structure and content.
- **Tailwind CSS:** For all styling, enabling a modern and responsive design.
- **JavaScript (ES6+):** For dynamic content rendering, interactivity, and animations.
- **Font Awesome:** For a wide range of high-quality icons.

---

### > GETTING_STARTED

# Since this is a static website, there is no complex setup required.

# 1. Clone the repository:
$ git clone https://github.com/omkarmm19/Portfolio-Omkar.git

# 2. Navigate to the project directory:
$ cd Portfolio-Omkar

# 3. Open index.html in your browser:
# You can simply double-click the index.html file to open it locally.

---

### > CUSTOMIZATION_GUIDE

# All personal information is managed from a single JavaScript object `resumeData`
# located inside the <script> tag at the bottom of the index.html file.

# To update, simply edit the values within this object:

```javascript
const resumeData = {
    profileImage: '/main.jpg', // Path to your image in the project folder
    links: {
        linkedin: 'YOUR_LINKEDIN_URL',
        github: 'YOUR_GITHUB_URL',
        leetcode: 'YOUR_LEETCODE_URL'
    },
    skills: [
        { category: 'Languages', items: ['Java', 'Python'], proficiency: [90, 85] },
        // ... and so on
    ],
    experience: [
        {
            role: 'Your Role',
            company: 'Your Company',
            date: 'Date Range',
            desc: 'Description of your experience.',
            icon: 'fa-solid fa-code' // Font Awesome icon class
        },
    ],
    // ... edit projects, education, certifications, and achievements in the same way.
};
```

---

### > CONTACT

- **Omkar Mahesh**
- **Email:** omkarmahesh12345@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/omkar-mahesh-a99b70289/

