import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import MainLayout from "./components/MainLayout"
import KnowUs from "./components/KnowUs"
import Tratamientos from "./components/Tratamientos"
import ContactPage from "./components/ContactPage"
import SingleTrat from "./components/SingleTrat"
import SingleCourse from "./components/SingleCourse"

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}/>
            <Route path="/conocenos" element={<KnowUs/>}/>
            <Route path="/tratamientos" element={<Tratamientos/>}/>
            <Route path="/tratamientos/:name" element={<SingleTrat/>}/>
            <Route path="/cursos/:name" element={<SingleCourse/>}/>
            <Route path="/contactanos" element={<ContactPage /> } />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
