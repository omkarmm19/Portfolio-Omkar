const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Create transporter
        // NOTE: USER MUST CONFIGURE .env WITH EMAIL_USER and EMAIL_PASS
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // e.g., 'your-email@gmail.com'
                pass: process.env.EMAIL_PASS  // e.g., 'your-app-password'
            }
        });

        // Email options
        const mailOptions = {
            from: `"${name}" <${email}>`, // Sender address
            to: process.env.EMAIL_USER,   // Receiver (the portfolio owner)
            subject: `Portfolio Contact: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <br>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });

    } catch (error) {
        console.error('Email Send Error:', error);
        res.status(500).json({ message: 'Failed to send email. Please try again later or use direct email.', error: error.message });
    }
};
