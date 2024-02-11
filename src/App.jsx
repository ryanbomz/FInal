import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


const App = () => {

  return (
    <Router>
      <Navbar />
      <Hero />
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default App