import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Videoseries from './components/Videoseries';
import Qna from './components/Qna';

function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Videoseries/>
      <Qna/>
    </div>
  );
}

export default App;
