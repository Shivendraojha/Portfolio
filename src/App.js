import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';
import Navbar from './Components/Pages/Navbar'
import About from './Components/About';
import Projects from './Components/Pages/Projects';
import Skill from './Components/Pages/SoftSkill';
import Contact from './Components/Pages/Contact';
import Education from './Components/Pages/Education';
import Certification from './Components/Pages/Certification';
import Hobbies from './Components/Pages/Hobbies';


function App() {
  return (
    <>

      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="*" exact element={<About />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/skill" exact element={<Skill />} />
          <Route path="/hobbies" exact element={<Hobbies />} />
          <Route path="/education" exact element={<Education />} />
          <Route path="/certification" exact element={<Certification />} />
          <Route path="/contact" exact element={<Contact />} />

        </Routes>
      </Router> </>
  );
}

export default App;
