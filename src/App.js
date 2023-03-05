import React from 'react'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './componenets/Header'
import Home from './componenets/Home';
import Footer from './componenets/Footer';
import Vedios from './componenets/vedios';
import Upload from './componenets/upload';
import Login from './componenets/Login';
import Signup from './componenets/Signup';


const App = () => {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/vedios' element={<Vedios/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Footer />
   </Router>
  )
  }
export default App