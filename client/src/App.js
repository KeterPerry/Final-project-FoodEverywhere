import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.js";
import Login from "./pages/login/login.js";
import Game from "./pages/games/game.js";
import Home from "./pages/home/home.js";
import Footer from "./components/footer/footer.js";
import { Contact } from "./pages/contact/contact";
import Register from "./pages/register/register.js";
import JoiningRoom from "./pages/joiningRoom/joiningRoom.js";
import About from "./pages/about/about";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/games" component={Game} />

        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/messanger" component={JoiningRoom} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
