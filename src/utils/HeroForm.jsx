import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter for redirection
import FloatingInput from "./FloatingInput";

function HeroForm() {
  const [payload, setPayload] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const router = useRouter(); // Initialize the router

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setPayload({
      ...payload,
      [e.target.name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!payload.Name.trim()) newErrors.Name = "Name is required";
    if (!payload.Email.trim()) newErrors.Email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(payload.Email)) newErrors.Email = "Email is invalid";
    if (!payload.Phone.trim()) newErrors.Phone = "Phone number is required";
    if (!payload.Message.trim()) newErrors.Message = "Message is required";
    if (!payload.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
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
    };

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(mailPayload),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (data.success) {
        router.push("/thank-you"); 
      } else {
        alert("Failed to submit the form. Please try again.");
      }

      setPayload({
        Name: "",
        Email: "",
        Phone: "",
        Message: "",
        termsAccepted: false,
      });

      return;
    } catch (error) {
      console.log("🚀 ~ file: HeroForm.jsx ~ handleSubmit ~ error:", error);
    }
  };

  return (
    <div className="p-4 bg-white/20 backdrop-blur-xl w-full md:h-[550px] md:w-[500px] md:ml-20 block mt-10 rounded-[20px] max-w-[1200px]">
      <div className="w-full h-full bg-white rounded-[20px]">
        <form
          className="flex flex-col md:flex-col h-full items-center p-[25px] gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex-1 w-full">
            <FloatingInput
              name="Name"
              label="Full Name"
              type="text"
              value={payload.Name}
              className="mb-0"
              onChange={handleChange}
            />
            {errors.Name && <p className="text-red-500 text-xs mt-1">{errors.Name}</p>}
          </div>
          <div className="flex-1 w-full">
            <FloatingInput
              name="Email"
              label="Email"
              type="email"
              value={payload.Email}
              className="mb-0"
              onChange={handleChange}
            />
            {errors.Email && <p className="text-red-500 text-xs mt-1">{errors.Email}</p>}
          </div>
          <div className="flex-1 w-full">
            <FloatingInput
              name="Phone"
              type="text"
              label="Phone Number"
              value={payload.Phone}
              className="mb-0"
              onChange={handleChange}
            />
            {errors.Phone && <p className="text-red-500 text-xs mt-1">{errors.Phone}</p>}
          </div>
          <div className="flex-1 w-full">
            <FloatingInput
              name="Message"
              type="textarea"
              label="Message"
              value={payload.Message}
              className="mb-0 h-[100px]"
              onChange={handleChange}
            />
            {errors.Message && <p className="text-red-500 text-xs mt-1">{errors.Message}</p>}
          </div>
          <div className="flex-1 w-full flex items-center gap-2">
            <input
              type="checkbox"
              name="termsAccepted"
              id="termsAccepted"
              checked={payload.termsAccepted}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label htmlFor="termsAccepted" className="text-sm text-gray-600">
              I agree to the 
              {/* <a href="/terms" className="text-blue-600 hover:underline"> */}
              <span className="text-blue-600 hover:underline"> Terms and Conditions</span> and 
              {/* <a href="/privacy" className="text-blue-600 hover:underline"> */}
              <span className="text-blue-600 hover:underline"> Privacy Policy</span>
            </label>
          </div>
          {errors.termsAccepted && <p className="text-red-500 text-xs w-full">{errors.termsAccepted}</p>}

          <button className="bg-primary uppercase py-3 px-4 rounded-[12px] font-semibold text-white hover:bg-white hover:text-primary border border-primary transition-all duration-300">
            Schedule Inspection
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeroForm;
