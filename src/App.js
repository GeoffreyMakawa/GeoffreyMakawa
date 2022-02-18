import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './madil/Home/Navbar';
import Slidebar from './madil/Home/Slidebar'
import MainContainer from './madil/Home/Main'
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Footer from './madil/Footer';

function App() {
  return (
    <Router >
    <div className="App">
    <NavBar />
      <Switch>
        <Route exact path="/home" >
          <Slidebar />
          <MainContainer />
        </Route>
      
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
