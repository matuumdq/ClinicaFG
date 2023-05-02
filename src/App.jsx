import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Options from "./components/Options"

function App() {
  

  return (
    <div className="bg-black/40">
      <Navbar />
      <Main />
      <Options />
      <Carousel />
      <Footer />
    </div>
  )
}

export default App
