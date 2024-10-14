import Home from "./pages/Home";

import { useState } from "react";

function App() {

  const [isPolicyVisible, setIsPolicyVisible] = useState(false);
  function togglePoliticaVisibility() {
    setIsPolicyVisible(prev => !prev)
  }

  return (
    <div className="bg-jet w-full flex flex-col min-h-screen max-sm:px-2">
      <Home></Home>
    </div>
  )
}

export default App
