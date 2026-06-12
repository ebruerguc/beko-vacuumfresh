import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


import Hero from "./components/Hero";
import SmartCounter from './components/SmartCounter';
import VacuumPump from './components/VacuumPump';
import ProductInspection from './components/ProductInspection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <SmartCounter />

      <ProductInspection></ProductInspection>
      <VacuumPump />
      <Footer></Footer>
    </>
  );
}

export default App;
