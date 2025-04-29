import SEO from "@/common/SEO";
import ServicesComponent from "@/components/Services";

function Services() {
  return (
    <>
      <SEO
        title="Services: Explore the Best Roofers in Springboro, Ohio"
        desc="Looking for reliable siding and gutter contractors near you? Discover top-notch roofers in Springboro ready to tackle your home improvement needs. Get quality service with Ohio Roofing solution!"
        route="/services"
      />
      <ServicesComponent />
    </>
  );
}

export default Services;
