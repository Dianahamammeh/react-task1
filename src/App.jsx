
import { Fragment } from 'react';
import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact';
import Footer from './components/5-footer/Footer';
import { BrowserRouter ,Route } from 'react-router-dom';
//ICON
//import { FaBeer } from 'react-icons/fa';

function App() {
  <BrowserRouter>
  <div className="App">
    <nav/>
   
    <Route path="/header" Component= {Header}/>
    <Route path="/cpntact" Component= {Contact}/>
  </div>
  </BrowserRouter>

  return (
    
  <div className='container'>
    
    <Fragment>
    <Header/>
   
    <Hero/>
    <div className='divider'/>
    <Main/>
    <div className='divider'/>
    <Contact/>
    <div className='divider'/>
    <Footer />
    </Fragment>
  </div>
  )
}

export default App;
