import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        // Create a Nodemailer transporter using Hostinger mail SMTP
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.HOSTINGER_EMAIL, // Your Hostinger email
                pass: process.env.HOSTINGER_PASSWORD, // Your Hostinger password
            },
        });

        // Send mail with the transporter
        await transporter.sendMail({
            from: process.env.HOSTINGER_EMAIL, // Sender address must be the authenticated email
            to: process.env.HOSTINGER_EMAIL, // Your Hostinger email (receiving the email)
            subject: subject || 'New Contact Form Message',
            html: `
                <h3>New Message from Contact Form</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>User Email:</strong> ${email}</p> <!-- User's email goes here -->
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email: ', error);
        return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 });
    }
}
