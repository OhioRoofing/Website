import SEO from "@/common/SEO";
import PPCComponent from "@/components/PPCLP";

export default function Home() {
  return (
    <>
      <SEO
        title="Ohio Economic Roofing- Discover Premier Roofers in Springboro"
        route="/landing-page"
        desc="Looking for 'roof and siding companies near me'? Contact us to find the best roofers in Springboro."
      />
      <PPCComponent />
    </>
  );
}
