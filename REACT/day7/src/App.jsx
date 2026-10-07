import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {

    
      function Home() {
        return (
          <div>
         <h2>Home</h2>
         <p>Welcome to the Home page!</p>

          </div>
         
        );
      }

      function About() {
        return (
          <div>
            <h2>About</h2>
            <p>This is the About page.</p>
          </div>
        );
      }

      function Contact() {
        return (
          <div>
            <h2>Contact</h2>
            <p>This is the Contact page.</p>
          </div>
        );
      }
      function APP(){
        return (
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        );
        
      }

    

  
}

export default App