/** @format */
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import { useSelector } from "react-redux"
import MyNavbar from "./components/NavbarComponent/MyNavbar"

function App() {
  const themeColor = useSelector((state) => state.setColor.selectedColor)
  return (
    <div className={themeColor ? "App light-theame" : "App dark-theame"}>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
