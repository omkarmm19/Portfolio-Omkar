#====================================================#
#  PROJECT: Omkar Mahesh - Personal Portfolio        #
#====================================================#

# DESCRIPTION:
# This repository contains the source code for my personal portfolio website. 
# It's a modern, single-page application designed to showcase my skills, 
# experience, and projects as an aspiring DevOps Engineer and Full-Stack Developer.

[LIVE_DEMO]: "https://your-portfolio-link.com"

#----------------------------------------------------
#  FEATURES
#----------------------------------------------------
- [x] Fully Responsive Design
- [x] Dark/Light Mode w/ Preference Saving
- [x] Dynamic Content Injection via JS Object
- [x] Interactive Skill Matrix w/ Proficiency Tooltips
- [x] Animated Timelines for Experience & Education
- [x] Scroll-Reveal Animations for a Dynamic Feel
- [x] Dual Contact Options (Direct & Google Form)

#----------------------------------------------------
#  TECH_STACK
#----------------------------------------------------
- HTML5: For semantic markup and structure.
- Tailwind_CSS: For a utility-first, responsive design system.
- JavaScript_ES6+: For all interactivity and dynamic content rendering.
- Font_Awesome: For a comprehensive library of high-quality icons.

#----------------------------------------------------
#  GETTING_STARTED
#----------------------------------------------------

# PREREQUISITES: A modern web browser.

# INSTALLATION:
# 1. Clone the repository:
$ git clone https://github.com/omkarmm19/Portfolio-Omkar.git

# 2. Navigate to the project directory:
$ cd Portfolio-Omkar

# 3. Open index.html in your browser.
# (No build process required)

#----------------------------------------------------
#  CUSTOMIZATION_GUIDE
#----------------------------------------------------
# All personal data is managed from the `resumeData` object
# inside the <script> tag at the bottom of index.html.

# To personalize, edit the values in this object:
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
    // ... edit projects, education, etc.
};
```

#----------------------------------------------------
#  DEPLOYMENT
#----------------------------------------------------
# This is a static site, deployable on any static hosting service.

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

# Simply connect your GitHub repository to one of these services.

#----------------------------------------------------
#  CONTACT
#----------------------------------------------------
[NAME]: "Omkar Mahesh"
[EMAIL]: "omkarmahesh12345@gmail.com"
[LINKEDIN]: "https://www.linkedin.com/in/omkar-mahesh-a99b70289/"

