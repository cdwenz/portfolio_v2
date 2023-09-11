import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Layer from './components/Layers';
import Navbar from './components/Navbar';
import Project from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Layer />
      <About />
      <Project />
      <Footer />
    </>
  );
}

export default App;
