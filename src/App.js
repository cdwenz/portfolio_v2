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
import Float from './components/Float';
import { useEffect, useState } from 'react';

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if(scrollY !== scroll) setScroll(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log({scroll})

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
      <Float />
    </div>
  );
}

export default App;
