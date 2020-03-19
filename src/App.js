import React from 'react';
import './App.css';
import Header from './components/Header';
import Middle from './components/Middle';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';


function App() {
  return (
   
      <div className="App">     
        <Header />
        <div className="middle-container">
            <Middle />
            <hr/>
            <Skills />
            <hr/>
            <Portfolio />
            <hr/>
            <Contact />
          </div>
          
        <Footer /> 
      
      </div>
  
  );
}

export default App;
