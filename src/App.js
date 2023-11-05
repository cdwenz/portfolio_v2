import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Layer from './components/Layers';
import Navbar from './components/Navbar';
import Project from './components/Projects';
import './App.css'
import Technologies from './components/Technologies';
import Employment from './components/Employment';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <Layer />
      <About />
      <Project />
      <Employment />
      <Technologies />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
