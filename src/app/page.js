import Image from "next/image";
import Navbar from "./Components/Navbar";
import LandingPage from "../Pages/Home";
import Footer from "./Components/Footer";
import Topbar from "./Components/Topbar";
 

export default function Home() {
  return (
    <>
    <Topbar />
    <Navbar />
    <LandingPage />
    <Footer />
    </>
  );
}
