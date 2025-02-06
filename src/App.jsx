import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Mywork from './Components/Mywork/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      
      <NavBar/>

      <Hero/>
      <About/>
       <Services/> 
       <Mywork/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App