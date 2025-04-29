import { useState } from "react";
import FloatingInput from "./FloatingInput";

function ContactForm() {
  const [payload, setPayload] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
    Country: "",
    ProjectType: "",
    Budget: "",
    termsAccepted: false,
  });

  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setPayload({
      ...payload,
      [e.target.name]: value,
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please accept the terms and conditions to proceed. ");
      return;
    }

    if (!payload.termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    const mailPayload = {
      subject: "New estimate query received from Ohio Roofing",
      html: `
              <p>
                <h2>Following is the data received from the Get Estimate form,</h2> <br/>
                <b>Name:</b> ${payload.Name} <br/>
                <b>Email:</b> ${payload.Email} <br/>
                <b>Phone:</b> ${payload.Phone} <br/>
                <b>Message:</b> ${payload.Message} <br/>
              </p>
              `,
      captchaToken,
    };

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(mailPayload),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (data.success) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit the form. Please try again.");
      }

      setPayload({
        Name: "",
        Email: "",
        Phone: "",
        Message: "",
        Country: "",
        ProjectType: "",
        Budget: "",
        termsAccepted: false,
      });

      setCaptchaToken(null);
    } catch (error) {
      console.log("🚀 ~ file: ContactForm.jsx:59 ~ handleSubmit ~ error:", error);
    }
  };

  return (
    <div className="p-4 bg-primary w-full max-w-[100] mb-5 flex items-center justify-center">
      <div className="lg:w-[50%] bg-primary p-8 w-100 text-white">
        <h2 className="text-[30px] font-bold mb-4 text-center">
          Get Free Consultancy
        </h2>
        <div className="border-t-4 border-blue-600 w-12 mx-auto mb-6"></div>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="w-full">
            <FloatingInput
              name="Name"
              label="Name"
              type="text"
              value={payload.Name}
              onChange={handleChange}
            />
          </div>
          {/* Email */}
          <div className="w-full">
            <FloatingInput
              name="Email"
              label="Email"
              type="email"
              value={payload.Email}
              onChange={handleChange}
            />
          </div>
          {/* Phone */}
          <div className="w-full">
            <FloatingInput
              name="Phone"
              label="Phone Number"
              type="text"
              value={payload.Phone}
              onChange={handleChange}
            />
          </div>
          {/* Country */}
          <div className="w-full">
            <FloatingInput
              name="Country"
              label="Country"
              type="text"
              value={payload.Country}
              onChange={handleChange}
            />
          </div>
          
          {/* Message */}
          <div className="w-full md:col-span-2">
            <textarea
              name="Message"
              className="w-full p-2 h-[100px] rounded text-gray-500"
              value={payload.Message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
          </div>
          {/* Terms and Conditions */}
          <div className="w-full md:col-span-2 flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              name="termsAccepted"
              id="termsAccepted"
              checked={payload.termsAccepted}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label htmlFor="termsAccepted" className="text-sm text-white">
            I agree to the 
              {/* <a href="/terms" className="text-blue-600 hover:underline"> */}
              <span className="text-[#8cb3ff] hover:underline"> Terms and Conditions</span> and 
              {/* <a href="/privacy" className="text-blue-600 hover:underline"> */}
              <span className="text-[#8cb3ff] hover:underline"> Privacy Policy</span>
            </label>
          </div>
          {/* Submit Button */}
          <div className="w-full md:col-span-2 flex justify-center">
            <button className="bg-white px-8 py-3 rounded text-[#1849a9] font-bold hover:bg-blue-200 hover:text-black transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
