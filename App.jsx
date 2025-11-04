import {Routes,Route}from "react-router-dom";

import Signin from "./Components/login/Signin";
import Aboutus from "./Components/Aboutus";
import Callus from "./Components/Callus";


function App() {

  return (
    <div>
     <a href="/signin">sign in </a>
     <a href="/aboutus">About us</a>
     <a href="/callus">Call us</a>
     <Routes>
    <Route path="/signin" element={<Signin/>} />
    <Route path="/aboutus" element={<Aboutus/>}  />
    <Route path="/callus" element={<Callus/>}/>

     </Routes>
    </div>
  )
}

export default App
