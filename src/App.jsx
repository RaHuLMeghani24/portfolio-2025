import React from 'react'
import Hero from './components/sections/Hero';
import ShowcaseSection from './components/sections/ShowcaseSection';
import LogoShowcase from './components/sections/LogoShowcase';
import FeatureCards from './components/sections/FeatureCards';
import Experience from './components/sections/Experience';
import TechStack from './components/sections/TechStack';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}
export default App;