import { BrowserRouter } from "react-router-dom"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Doctors from "./components/Doctors"
import Learn from "./components/Learn"
import Work from "./components/Work"
import Buy from "./components/Buy"
import Supplies from "./components/Supplies"
import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Workshop from "./components/Workshop"
import Form from "./components/Form"

function App() {
  

  return (
    <BrowserRouter>
        <Navbar />
        <Main />
        <Doctors />
        <Learn />
        <Work />
        <Buy />
        <Supplies />
        <Workshop />
        <Carousel />
        <Form />
        <Footer />
    </BrowserRouter>
  )
}

export default App
