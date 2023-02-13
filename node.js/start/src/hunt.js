import "./hunt.css";
import { BrowserRouter as Router, Routes, Route, link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contant } from "./pages/Contact";
import { Navbar} from "./Navbar";
import { useState } from "react";
import { useToggle } from "./useToggle";

function hunt() {
        const [isVisible, toggle] =  useToggle
        const [username, setUsername] = useState("toshnex");

            return (
   <div className="hunt"> 

   <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
   {isVisible && <h1> Hidden text</h1>}
   
         <Router> 
            <Navbar />

                <Routes>
                        <Route path="/" element={<Home username={username} />} />
                        <Route path="/Profile" element={<Profile username={username} />} />
                        <Route path="/contant" element={<Contant />} />
                        <Route path="/*" element={<h1> PAGE NOT FOIUND </h1>} />
           
                </Routes>
         </Router>           
        
        
    </div>
 );

}
export default hunt;