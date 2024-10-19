import Footer from "../components/Footer";
import Input from "../components/Input/Input";
import HomeInformation from "../components/HomeInformation";
import Politica from "../components/Privacy/PoliticaPrivacidade";

import { useState } from "react";

function Home() {

  const [isPolicyVisible, setIsPolicyVisible] = useState(false);
  function togglePoliticaVisibility() {
    setIsPolicyVisible(prev => !prev)
  }

  return (
    <div className="bg-jet w-full flex flex-col min-h-screen max-sm:px-2">
      <HomeInformation/>
      <Input/>
      <Footer togglePoliticaVisibility={togglePoliticaVisibility}/>
      {
        isPolicyVisible && <Politica togglePoliticaVisibility={() => togglePoliticaVisibility()}/>
      }
    </div>
  )
}

export default Home
