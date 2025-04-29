import Header from "./header";
import Footer from "./footer";
import { inter } from "@/config/fonts";
import BeforeFooter from "./beforeFooter";
import GoogleReviews from "./reviews";


function Layout({ children }) {
  return (
    <main className={inter.className}>
      <Header />
      {children}
      <GoogleReviews />
      <BeforeFooter />
      <Footer />
    </main>
  );
}

export default Layout;
