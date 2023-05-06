import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import MainLayout from "./components/MainLayout"
import KnowUs from "./components/KnowUs"
import Tratamientos from "./components/Tratamientos"

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}/>
            <Route path="/conocenos" element={<KnowUs/>}/>
            <Route path="/tratamientos" element={<Tratamientos/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
