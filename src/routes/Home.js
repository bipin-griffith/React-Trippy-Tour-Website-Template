import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TravelPlans from "../components/TravelPlans";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destination />
      <TravelPlans />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
