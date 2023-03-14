import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.js";
import Login from "./pages/login/login.js";
import Quiz from "./pages/quiz/quiz.js";
import Home from "./pages/home/home.js";
import Footer from "./components/footer/footer.js";
import { Contact } from "./pages/contact/contact";
import Register from "./pages/register/register.js";
import JoiningRoom from "./pages/joiningRoom/joiningRoom.js";
import About from "./pages/about/about";
import InterestingFoods from "./pages/InterestingFoods/interestingFoods.js";
import Foods from "./pages/allFoods/allFoods.js";
import Popular from "./pages/popular/popular.js";
import Introduction from "./pages/introduction/introduction.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Introduction} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/interestingfoods" component={InterestingFoods} />
        <Route exact path="/foods" component={Foods} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/messanger" component={JoiningRoom} />
        <Route exact path="/popular" component={Popular} />
        {/* <Route exact path="/popup" component={PopUp} /> */}
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
