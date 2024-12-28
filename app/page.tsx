
import ContactUs  from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Hero from "@/components/header";
import Navbar from "@/components/navbar";
import PortfolioSection from "@/components/PortfolioSection";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
   <>
  

   <Navbar/>
   <Hero/>
   <WorkExperience/>
   <PortfolioSection/>
   <ContactUs/>
   <Footer/>
 
   </>
  );
}
