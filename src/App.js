import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './madil/Home/Navbar';
import Slidebar from './madil/Home/Slidebar'
import MainContainer from './madil/Home/Main'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slidebar />
      <MainContainer />
    </div>
  );
}

export default App;
