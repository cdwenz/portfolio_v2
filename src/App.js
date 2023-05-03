import './App.css';
import About from './components/About';
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
    </>
  );
}

export default App;
