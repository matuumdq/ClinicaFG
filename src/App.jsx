import { BrowserRouter } from "react-router-dom"
import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Options from "./components/Options"
import Contact from "./components/Contact"

function App() {
  

  return (
    <BrowserRouter>
      
        <Navbar />
        <Main />
        <Contact />
        <Options />
        <Carousel />
        <Footer />
    </BrowserRouter>
  )
}

export default App
