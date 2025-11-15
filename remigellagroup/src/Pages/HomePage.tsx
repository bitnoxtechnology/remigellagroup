import Navbar from "../Components/Navbar";
import Herosection from "../Components/Herosection";
import AboutSection from "../Components/AboutSection";
import CompaniesSection from "../Components/CompaniesSection";
import ServicesSection from "../Components/ServiceSection";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import Meta from "../Components/Meta";

const HomePage = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <Herosection />
      <AboutSection />
      <CompaniesSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
