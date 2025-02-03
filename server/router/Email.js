import express from "express"
import nodemailer from "nodemailer"

const router = express.Router()

router.get('/', async (req, res) => {
    const { to, name, senderName, htmltext, email } = req.query;
    console.log(req.query)
    if (!to) {
        return res.status(400).json({ message: "The user's contact email address is not provided." });
    }

    if (!/@gmail\.com$/.test(to)) {
        return res.status(400).json({ message: "The user's Gmail addresses are not allowed." });
    }
    if (!senderName || !htmltext) {
        return res.status(400).json({ message: "Name and  content are required." });
    }
    try {
        const transporter = nodemailer.createTransport({
            host: `${process.env.HOST_ENV}`,
            port: 465,
            secure: true,
            auth: {
                user: `${process.env.USER}`,
                pass: `${process.env.PASSWORD}`
            }
        });

        const emailContent = `
        <div style="
    font-family: 'Arial', sans-serif;
    line-height: 1.8;
    color: #333;
    background-color: #f4fafa;
    padding: 30px;
    border-radius: 10px;
    max-width: 600px;
    margin: 20px auto;
    box-shadow: 0px 4px 10px rgba(0, 128, 128, 0.2);
    border: 1px solid #b2dfdb;
">
    <h2 style="
        color: #00796b;
        text-align: center;
        font-size: 24px;
        margin-bottom: 20px;
    ">
        📢 Portfolio Notification
    </h2>

    <p style="font-size: 16px; color: #004d40;">
        Dear <strong>${name}</strong>,
    </p>

    <p style="font-size: 14px; color: #333;">
        ${htmltext}
    </p>

    <div style="
        background-color: #e0f2f1;
        padding: 15px;
        border-radius: 8px;
        margin-top: 20px;
        font-size: 14px;
        color: #004d40;
    ">
        <strong>From:</strong> ${senderName} <br>
        <strong>Email:</strong> ${email}
    </div>

    <div style="text-align: center; margin-top: 25px;">
        <a href="mailto:${email}" style="
            background-color: #00796b;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 14px;
            display: inline-block;
        ">
            Reply to ${senderName}
        </a>
    </div>

    <p style="font-size: 12px; color: #666; text-align: center; margin-top: 30px;">
        &copy; ${new Date().getFullYear()} ${name} Inc. All rights reserved.
    </p>
</div>
        `;

        const info = await transporter.sendMail({
            from: 'contact@getportfolio.online',
            to: to,
            subject: 'Portfolio Notification',
            html: emailContent,
        });

        console.log(`message send: ${info.messageId}`);
        res.status(200).json({ message: "Email was sent successfully." });
    } catch (error) {
        console.error('E-posta gönderilemedi:', error);
        res.status(500).send('E-posta gönderilemedi.');
    }


});

export default router;