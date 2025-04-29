import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import FloatingInput from "@/utils/FloatingInput";
import FloatingTextArea from "@/utils/FloatingTextArea";
import Contact from "@/images/logo.png";

function ContactUsComponent() {
  const router = useRouter();
  const [payload, setPayload] = useState({
    Name: "",
    Email: "",
    Phone: "",
    ZipCode: "",
    Message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mailPayload = {
      subject: "New Contact Form Submission - Ohio Roofing",
      html: `
          <p>
            <h2>Following is the data received from the contact form,</h2> <br/>
            <b>Name:</b> ${payload.Name || 'Not provided'} <br/>
            <b>Email:</b> ${payload.Email || 'Not provided'} <br/>
            <b>Phone:</b> ${payload.Phone || 'Not provided'} <br/>
            <b>Zip Code:</b> ${payload.ZipCode || 'Not provided'} <br/>
            <b>Message:</b> ${payload.Message || 'Not provided'} <br/>
          </p>
          `,
    };

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailPayload),
      });

      const data = await response.json();
      if (data.success) {
        router.push("/thank-you");
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.log("🚀 ~ file: index.jsx:59 ~ handleSubmit ~ error:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };
  return (
    <section className="pt-[180px]">
      <div className="container mx-auto flex items-center gap-8">
        <div className="flex-1 flex flex-col">
          <h1 className="text-[45px] font-extrabold">Contact Us</h1>
          <p>
            We stay in constant communication with our customers until the job
            is done. To get a free estimate, or if you have questions, just drop
            us a line. We look forward to serving you!
          </p>
          <h2 className="mt-4 text-[30px] font-semibold">Hours</h2>
          <p>Monday - Friday: 7am - 5pm</p>
          <p>Saturday - Sunday: Only by Appointment</p>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
            <FloatingInput
              name="Name"
              label="Name"
              type="text"
              value={payload.Name}
              onChange={handleChange}
            />
            <FloatingInput
              name="Email"
              label="Email"
              type="email"
              value={payload.Email}
              onChange={handleChange}
            />
            <FloatingInput
              name="Phone"
              label="Phone"
              type="number"
              value={payload.Phone}
              onChange={handleChange}
            />
            <FloatingInput
              name="ZipCode"
              label="Zip Code"
              type="text"
              value={payload.ZipCode}
              onChange={handleChange}
            />
            <FloatingTextArea
              name="Message"
              label="Message"
              value={payload.Message}
              onChange={handleChange}
            />
            <button className="bg-primary text-white mt-4 py-3 rounded font-semibold">
              SEND
            </button>
          </form>
        </div>
        <div className="flex-1  justify-center hidden lg:flex items-center">
          <Image
            src={Contact}
            placeholder="blur"
            alt="lyncit - contact"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
export default ContactUsComponent;
