import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Videoseries from './components/Videoseries';

function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Videoseries/>
    </div>
  );
}

export default App;
