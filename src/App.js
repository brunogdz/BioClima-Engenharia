import React, {useState} from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles'
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import DropDown from './components/DropDown';
import InfoSection from './components/InfoSection';
import { InfoData, InfoData2 } from './data/InfoData';

function App() {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <DropDown isOpen={isOpen}  toggle={toggle}/>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData}/>
      <InfoSection {...InfoData2}/>
    </>
  );
}

export default App;
