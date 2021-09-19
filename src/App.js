import React from 'react';
import About from './components/AboutSection';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Feedback from './components/Feedback';
import Work from './components/Work';
import VideoSection from './components/VideoSection';
import Contact from './components/Contact';
function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <ImageSlider/>
      <About/>
      <Work/>
      <Projects/>
      <Feedback/>
      <VideoSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
