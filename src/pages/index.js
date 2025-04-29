import SEO from "@/common/SEO";
import HomeComponent from "@/components/Home";

export default function Home() {
  return (
    <>
      <SEO
        title="Ohio Economic Roofing- Discover Premier Roofers in Springboro"
        route="/"
        desc="Looking for 'roof and siding companies near me'? Contact us to find the best roofers in Springboro."
      />
      <HomeComponent />
    </>
  );
}
