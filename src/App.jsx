import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Options from "./components/Options"
import Doctors from "./components/Doctors"
import Learn from "./components/Learn"
import Work from "./components/Work"
import Buy from "./components/Buy"

function App() {
  

  return (
    <BrowserRouter>
      
        <Navbar />
        <Main />
        <Doctors />
        <Learn />
        <Work />
        <Buy />
        <Options />
        {/* <Carousel /> */}
        {/* <Contact /> */}
        <Footer />
    </BrowserRouter>
  )
}

export default App
