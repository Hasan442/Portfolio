import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Production from './components/Production';
import Experience from './components/Experience';


function App() {
  return (
    <>
    <div className="App">
         <Header />
          <Main/>
          <Aboutme/>
          <Experience/>
          <Skills/>
          <Projects/>
          
          <Resume/>
          <Contact/>
          <Footer />
    </div> 
    </>
  );
}

export default App;