import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.js";
import Login from "./pages/login/login.js";
import Home from "./pages/home/home.js";
import Footer from "./components/footer/footer.js";
import { Contact } from "./pages/contact/contact";
import Register from "./pages/register/register.js";
import Messenger from "./pages/messenger/messenger.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/messenger" component={Messenger} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
