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

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <Layer />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
