import Footer from "./components/Footer";
import Input from "./components/Input/Input";
import HomeInformation from "./components/HomeInformation";

function App() {

  return (
    <div className="bg-jet w-full flex flex-col h-screen">
      <HomeInformation/>
      <Input/>
      <Footer/>
    </div>
  )
}

export default App
