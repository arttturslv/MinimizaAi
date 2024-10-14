import Footer from "./components/Footer";
import Input from "./components/Input/Input";
import HomeInformation from "./components/HomeInformation";
import Politica from "./components/PoliticaPrivacidade";

import { useState } from "react";

function App() {

  const [isPolicyVisible, setIsPolicyVisible] = useState(true);
  function togglePoliticaVisibility() {
    setIsPolicyVisible(prev => !prev)
  }

  return (
    <div className="bg-jet w-full flex flex-col h-screen max-sm:px-2">
      <HomeInformation/>
      <Input togglePoliticaVisibility={togglePoliticaVisibility}/>
      <Footer togglePoliticaVisibility={togglePoliticaVisibility}/>
      {
        isPolicyVisible && <Politica togglePoliticaVisibility={() => togglePoliticaVisibility()}/>
      }
    </div>
  )
}

export default App
