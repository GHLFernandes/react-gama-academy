import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import Repositories from "./Repositories.js";
import Home from "./Home.js";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={ <Home /> } />
                <Route path='/repositories' element={ <Repositories /> } />
            </Routes>
        </BrowserRouter>
    )
}