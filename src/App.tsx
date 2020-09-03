import React from "react"
import "./App.scss"
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from "./pages/About"
import Todos from "./pages/Todos"
import Navbar from "./components/Navbar"

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className='wrapper'>
        <Route exact path='/' component={Todos} />
        <Route path='/about' component={About} />
      </div>
    </Router>
  )
}

export default App
