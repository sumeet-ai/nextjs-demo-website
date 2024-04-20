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

      <script id="bot" src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        chat-icon="https:&#x2F;&#x2F;encrypted-tbn0.gstatic.com&#x2F;images?q=tbn:ANd9GcR-FUzoAh9qvqyByAfPJdne9PUjPHehyjToNQ&ampusqp=CAU"
        intent="WELCOME"
        chat-title="Pathalogy_bot"
        agent-id="4aa3acd3-b8c0-4a6b-8f96-a3faab47ffa2"
        language-code="en"
      ></df-messenger>
    </>
  );
}
