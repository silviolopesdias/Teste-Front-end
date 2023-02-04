import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

function MyRoutes (){

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Home" element={<Home/>}/>
            </Routes>
        </Router>
    )


}
export default MyRoutes