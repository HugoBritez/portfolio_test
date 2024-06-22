import { Route, Routes } from "react-router-dom"
import Header from "./header/Header"
import Home from "./routes/home/Home"
import About from "./routes/about/About"

import Contact from "./routes/contact/Contact"



const App = () => {
  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            
            <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
    </div>
  )
}

export default App