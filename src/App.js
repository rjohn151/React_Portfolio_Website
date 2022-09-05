import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="container">
      <Navbar />
      <Introduction />
      <Experience />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
