import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './madil/Home/Navbar';
import Slidebar from './madil/Home/Slidebar'
import MainContainer from './madil/Home/Main'
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Footer from './madil/Footer';
import Login from './madil/Login';
import Signup from './madil/Signup';

function App() {
  return (
    <Router >
    <div className="App">
    <NavBar />
      <Switch>
        <Route exact path="/" >
          <Slidebar />
          <MainContainer />
        </Route>
        <Route exact path="/login" >
        <Login />
        </Route>


        <Route exact path="/signup" >
        <Signup />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
