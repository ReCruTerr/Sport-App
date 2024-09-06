import Image from "next/image";
import { Haeder } from "./components/header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>  
      <Haeder/>
      <Main/>
      <Footer/>
    </>
  );
}
