import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chars from './Chars'
import Char from "./Char";



export default function App() {
  
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Chars />}/>
          <Route path="char">
            <Route path=":id" element={<Char/>}/>
          </Route>
         
        </Routes>
      </Router>
    );
}
