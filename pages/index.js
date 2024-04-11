import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/Navbar";
import Homee from "./components/home";
import Aboutus from "./components/aboutus";
import Doctors from "./components/doctors";
import Services from "./components/services";
import Labs from "./components/labs";
import Labs2 from "./components/lab2"
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Homee />
      <Aboutus />
      <Doctors />
      <Services />
      <Labs />
      <Labs2 />
      <Footer />
    </>
  );
}
