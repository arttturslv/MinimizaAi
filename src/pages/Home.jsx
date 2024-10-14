import Footer from "../components/Footer";
import Input from "../components/Input/Input";
import HomeInformation from "../components/HomeInformation";
import Politica from "../components/PoliticaPrivacidade";

import { useState } from "react";

function Home() {

  const [isPolicyVisible, setIsPolicyVisible] = useState(false);
  function togglePoliticaVisibility() {
    setIsPolicyVisible(prev => !prev)
  }

  return (
    <>
      <HomeInformation/>
      <Input togglePoliticaVisibility={togglePoliticaVisibility}/>
      <Footer togglePoliticaVisibility={togglePoliticaVisibility}/>
      {
        isPolicyVisible && <Politica togglePoliticaVisibility={() => togglePoliticaVisibility()}/>
      }
    </>
  )
}

export default Home