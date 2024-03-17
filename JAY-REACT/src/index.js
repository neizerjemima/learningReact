import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, About, Contact, Myself } from './App';
// import { About } from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />}>
    <Route path="mysef" element={<Myself />} />
    </Route>
    <Route path="/contact" element={<Contact />}/>
    
 </Routes>
 </BrowserRouter>,
  document.getElementById("root")
);

