import React from 'react'
import Signup from './components/Signup'
import Signin from './components/Signin/Signin';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
    

    <Routes>
      <Route  path="/" Component={Signup}/>
      <Route exact path="/Signin" Component={Signin}/>
       
      </Routes>
      {/* <Signin/> */}
    </BrowserRouter>
      
    </>
  )
}

export default App
