import React from 'react'
import Hero from './components/sections/Hero';
import ShowcaseSection from './components/sections/ShowcaseSection';
import LogoShowcase from './components/sections/LogoShowcase';
import FeatureCards from './components/sections/FeatureCards';
import Experience from './components/sections/Experience';
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
    </>
  )
}
export default App;