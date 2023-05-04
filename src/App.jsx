import { BrowserRouter } from "react-router-dom"
import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Options from "./components/Options"
import Contact from "./components/Contact"
import Doctors from "./components/Doctors"

function App() {
  

  return (
    <BrowserRouter>
      
        <Navbar />
        <Main />
        <Doctors />
        <Options />
        <Carousel />
        <Contact />
        <Footer />
    </BrowserRouter>
  )
}

export default App
