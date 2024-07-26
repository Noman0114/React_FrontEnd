import './App.css';
import Navbar from './components/Navbar';
import Carosel from './components/Carosel';
import Card from './components/Card';
import Message from './components/Message';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
// import Offcanvas from './components/Offcanvas';
function App() {

  return (
    <>
     <Navbar />
     <Carosel />
     <Card />
    
     <Pricing/>
     <Message/>
     <Footer/>
    
     
     {/* <Offcanvas/> */}
    </>
  )
}

export default App
