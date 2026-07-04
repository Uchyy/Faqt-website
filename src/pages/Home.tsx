import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import BuiltFor from "../components/BuiltFor";

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