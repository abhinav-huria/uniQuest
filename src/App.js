import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginPage from "./LoginPage";
import Answers from './display-answer';

function App() {
  return (
    <div className="App">
        <LoginPage/>
      <Navbar />
      <Home />
      <Answers/>
      <Footer />
    </div>
  );
}

export default App;
