import SEO from "@/common/SEO";
import ContactUsComponent from "@/components/ContactUs";

function ContactUs() {
  return (
    <>
      <SEO
        title="Reach Out to Ohio’s Best Roofing Solutions in Springboro, Ohio"
        desc="From rubber roofing to everlast siding, Ohio Roofing Solution can be your one-stop shop if you're looking for roofers in Springboro."
        route="/contact-us"
      />
      <ContactUsComponent />
    </>
  );
}

export default ContactUs;
