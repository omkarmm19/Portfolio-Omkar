# Omkar Mahesh - Personal Portfolio

![Portfolio Preview](https://your-portfolio-link.com/preview.png)

A modern, full-stack MERN portfolio application designed to showcase my skills, projects, and detailed professional experience. Built with performance, responsiveness, and interactivity in mind.

[**Live Demo**](https://your-portfolio-link.com) | [**Report Bug**](https://github.com/omkarmm19/Portfolio-Omkar/issues) | [**Request Feature**](https://github.com/omkarmm19/Portfolio-Omkar/issues)

---

## 🚀 Features

-   **Full-Stack Architecture**: React frontend serving dynamic content from an Express/Node.js backend.
-   **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices.
-   **Theme System**: Dark/Light mode toggle with local storage persistence.
-   **Interactive UI**: Smooth animations using Framer Motion and scroll-reveal effects.
-   **Contact Integration**:
    -   **Direct Email**: Client-side integration via EmailJS.
    -   **Backend API**: Robust email service using Nodemailer (optional/fallback).
-   **Dynamic Content**: Skill matrix with proficiency tooltips, animated timelines for experience/education.

---

## 🛠️ Tech Stack

### Frontend (Client)
-   **Framework**: [React](https://reactjs.org/) (Vite)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [FontAwesome](https://fontawesome.com/), [Devicon](https://devicon.dev/)
-   **HTTP Client**: Axios

### Backend (Server)
-   **Runtime**: [Node.js](https://nodejs.org/)
-   **Framework**: [Express.js](https://expressjs.com/)
-   **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose ODM)
-   **Email Service**: Nodemailer

---

## ⚙️ Prerequisites

Ensure you have the following installed on your local machine:
-   [Node.js](https://nodejs.org/) (v14+)
-   [npm](https://www.npmjs.com/) (v6+)
-   [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas URI)

---

## 📥 Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/omkarmm19/Portfolio-Omkar.git
    cd Portfolio-Omkar
    ```

2.  **Install Dependencies**

    **Server:**
    ```bash
    cd server
    npm install
    ```

    **Client:**
    ```bash
    cd ../client
    npm install
    ```

---

## 🔧 Configuration

Create a `.env` file in **both** the `server` and `client` directories with the following variables:

### Server (`/server/.env`)
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_email_address@gmail.com
EMAIL_PASS=your_email_app_password
```

### Client (`/client/.env`)
```env
VITE_API_URL=http://localhost:5000
# EmailJS Configuration (Optional if using server-side email)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🏃‍♂️ Running the Application

### 1. Start the Backend Server
Open a terminal and run:
```bash
cd server
npm run dev
```
*The server will run on `http://localhost:5000` (or your defined PORT).*

### 2. Start the Frontend Client
Open a **new** terminal window and run:
```bash
cd client
npm run dev
```
*The client will typically run on `http://localhost:5173`.*

---

## 📂 Project Structure

```
Portfolio-Omkar/
├── client/                 # Frontend React Application
│   ├── public/             # Static assets
│   ├── src/                # Source code (Components, Pages, Hooks)
│   ├── .env                # Client environment variables
│   └── package.json        # Client dependencies
│
├── server/                 # Backend Node.js Application
│   ├── config/             # Database configuration
│   ├── controllers/        # Route logic
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── .env                # Server environment variables
│   └── index.js            # Entry point
│
└── README.md               # Project documentation
```

---

## 🤝 Contact

**Omkar Mahesh**

-   📧 Email: [omkarmahesh12345@gmail.com](mailto:omkarmahesh12345@gmail.com)
-   LinkedIn: [Omkar Mahesh](https://www.linkedin.com/in/omkar-mahesh-a99b70289/)
-   GitHub: [omkarmm19](https://github.com/omkarmm19)

---

Made with ❤️ by Omkar Mahesh
