import React from 'react'
import Hero from './sections/Hero';
import ShowcaseSection from './sections/ShowcaseSection';
import LogoShowcase from './sections/LogoShowcase';
import FeatureCards from './sections/FeatureCards';
import Experience from'./sections/Experience';
import TechStack from'./sections/TechStack';
import Testimonials from'./sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
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