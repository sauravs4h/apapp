import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Videoseries from './components/Videoseries';
import Qna from './components/Qna';
import Footer from './components/Footer';

function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Videoseries/>
      <Qna/>
      <Footer/>
    </div>
  );
}

export default App;
