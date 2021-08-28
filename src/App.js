import React from 'react';
import About from './components/AboutSection';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Feedback from './components/Feedback';
function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <ImageSlider/>
      <About/>
      <Projects/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
