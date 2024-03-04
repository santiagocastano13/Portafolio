import { useState, useEffect } from 'react'
import { Header } from './components/layouts/Header/Header'
import { Logo } from './components/Logo/Logo'
import { Navbar } from './components/Navbar/Navbar'
import { ItemNav } from "./components/ItemNav/ItemNav";

import { Home } from "./components/pages/Home/Home";
import Sena from './assets/sena-logo.png';
import { Networks } from './components/Networks/Networks';
import { GiHamburgerMenu } from "react-icons/gi";


import './App.css'
import { Whatsapp } from './components/Whatsapp/Whatsapp';





function App() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleHeader = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      {isMobileView && (
        <div className='hamburger'>
        <button onClick={toggleHeader}>
          {isHeaderVisible ? <GiHamburgerMenu/> : <GiHamburgerMenu/>}
        </button>
        </div>
      )}
      {(isHeaderVisible || !isMobileView) && (
        <Header>
          
          <Logo />
          <h2>SANTIAGO CASTAÑO</h2>
          <Navbar>
            <ul>
              <ItemNav content="Inicio" route="/" />
              <ItemNav content="Perfil" route="#Profile" />
              <ItemNav content="Proyectos" route="#Projects" />
              <ItemNav content="Referencias" route="#References" />
              <ItemNav content="Experiencia" route="#Experience" />
            </ul>
          </Navbar>
          <img src={Sena} alt="SENA1" />
          <Networks />
        </Header>
      )}
      <Home/>
    <Whatsapp/>
    </>
    
  )
}



export default App
