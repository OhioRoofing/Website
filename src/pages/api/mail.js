import { createTransport } from "nodemailer";

export default async function handler(req, res) {
  const { body } = req;
  // Remove the extra JSON.parse since body is already parsed
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "ohioroofingsol@gmail.com",
      pass: "fomwahevrrasjoux",
    },
  });

  const mailList = [
    "info@oheroofing.com",
    "umair.numl@gmail.com",
    "franklinyoung2001@gmail.com",
  ];

  // Email content
  const mailOptions = {
    from: "ohioroofingsol@gmail.com",
    to: mailList,
    subject: body.subject,
    html: `${body.html}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
