import {BrowserRouter as  Router, Route, Routes} from "react-router-dom"
import {Home} from "./Components/Pages/Home"
import {Contact} from "./Components/Pages/Contact"
import {Loja} from "./Components/Pages/Loja/Loja"
import {Help} from "./Components/Pages/Help/Help"
import {Aboult} from "./Components/Pages/Aboult/About"
import {Container} from "./Components/Layout/Container/Container"
import {Navbar} from "./Components/Layout/Navbar/Navbar"

function App() {
 

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Container customClass="minheight">
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route e path="/Contact" element={<Contact/>}/>
              <Route e path="/Loja" element={<Loja/>}/>
              <Route e path="/Help" element={<Help/>}/>
              <Route e path="/Aboult" element={<Aboult/>}/>
          </Routes>
        </Container>
      </Router>
    </div>
  )
}

export default App
