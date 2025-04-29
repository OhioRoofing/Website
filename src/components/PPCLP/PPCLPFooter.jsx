import Image from "next/image";
import { useRouter } from "next/router";

import BG from "@/images/services/RR.webp";
import { raleway } from "@/config/fonts";
import Link from "next/link";
import { useState } from "react";
import FloatingInput from "@/utils/FloatingInput";
import FloatingTextArea from "@/utils/FloatingTextArea";
import Stars from "@/images/stars.png";


function PPCLPFooter() {
  const router = useRouter();
  const [payload, setPayload] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
    ZipCode: "",
    ProjectType: "",
    Budget: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

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

  const Reviews = [
    {
      initial: "M",
      name: "Matthew Stinson",
      desc: "Ohio Economic Roofing recently completed a full replacement of my roof. They managed my claim with my insurance company and I'm grateful for it because the insurance company kept denying my claim when there was clearly hail and wind damage. Ohio Economic Roofing was able to get my insurance company to commit to the cost of a full roof replacement. In addition, Ohio Economic Roofing's price was fair and comparable to the going market rate. I'm very satisfied with the quality and would recommend them to anyone needing claim support and/or a roof replacement.",
    },
    {
      initial: "C",
      name: "Linda Foster",
      desc: "Positive: Professionalism, Punctuality, Quality, Responsiveness, Value Work done in a timely fashion, contractors were professional and polite. Would use and highly recommend. Services: Roof repair for storm & wind damage, Roof inspection, Roof repair, Roof installation",
    },
  ];

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields validation
    if (!payload.Name.trim()) newErrors.Name = "Name is required";
    if (!payload.Email.trim()) newErrors.Email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(payload.Email)) newErrors.Email = "Email is invalid";
    if (!payload.Phone.trim()) newErrors.Phone = "Phone number is required";
    if (!payload.Message.trim()) newErrors.Message = "Message is required";
    if (!payload.ZipCode.trim()) newErrors.ZipCode = "Zip code is required";
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
                <b>Zip Code:</b> ${payload.ZipCode} <br/>
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
    } catch (error) {
      console.log("🚀 ~ file: ContactForm.jsx:59 ~ handleSubmit ~ error:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };
  return (
    
    <section className="md:h-[350px] lg:h-[350px] overflow-hidden relative footer-after  image-bg mt-4  min-h-[650px] ">
      {/* <Image
        src={BG}
        width={0}
        height={0}
        placeholder="blur"
        alt="ohio roofing - image"
        className="absolute -top-[100%] left-0 -z-[1]"
      /> */}
       <div className="p-4 bg-transparent w-full max-w-[100] mb-5 flex items-center justify-center">
      <div className="lg:w-[50%] bg-transparent p-8 w-100 text-white z-[1]">
        <h2 className="text-[30px] font-bold mb-4 text-center ">
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
            {errors.Name && <p className="text-red-400 text-xs mt-1">{errors.Name}</p>}
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
            {errors.Email && <p className="text-red-400 text-xs mt-1">{errors.Email}</p>}
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
            {errors.Phone && <p className="text-red-400 text-xs mt-1">{errors.Phone}</p>}
          </div>
          {/* Zip Code */}
          <div className="w-full">
            <FloatingInput
              name="ZipCode"
              label="Zip Code"
              type="text"
              value={payload.ZipCode}
              onChange={handleChange}
            />
            {errors.ZipCode && <p className="text-red-400 text-xs mt-1">{errors.ZipCode}</p>}
          </div>
          
          {/* Message */}
          <div className="w-full md:col-span-2 z-[1]">
            <textarea
              name="Message"
              className="w-full p-2 h-[100px] rounded text-gray-500"
              value={payload.Message}
              onChange={handleChange}
              placeholder="Message"
            ></textarea>
            {errors.Message && <p className="text-red-400 text-xs mt-1">{errors.Message}</p>}
          </div>
          {/* Terms and Conditions */}
          <div className="w-full md:col-span-2 flex items-center gap-2 mt-2 z-[1]">
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
            {errors.termsAccepted && <p className="text-red-400 text-xs ml-6">{errors.termsAccepted}</p>}
          </div>
          {/* Submit Button */}
          <div className="w-full md:col-span-2 flex justify-center z-[1]">
            <button type="submit" className="bg-white px-8 py-3 rounded text-[#1849a9] font-bold hover:bg-blue-200 hover:text-black transition">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
      
    </section>
  );
}

export default PPCLPFooter;
