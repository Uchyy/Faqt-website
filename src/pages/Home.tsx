import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import HowItWorks from "../components/layout/HowItWorks";
import Footer from "../components/layout/Footer";
import BuiltFor from "../components/layout/BuiltFor";

function Home() {
  return (
    <>
      <Navbar />

      <Hero/>

      <HowItWorks />
      <br /> <br /> 

      <BuiltFor /> <br />  <br /> 

      <Footer /> 
            
    </>
  );
}

export default Home;