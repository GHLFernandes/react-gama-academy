import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import Repositories from "./pages/Repositories/index.js";
import Home from "./pages/Home/index.js";

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