import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import Header from './components/Header.js'
import BusinessCard from './components/BusinessCard.jsx'
import NewMember from './components/NewMember.jsx'
import DeleteMember from './components/DeleteMember.jsx'

function App() {
  fetch("./data.json")
  .then(res => res.json())
  .then(data => {
    console.log(data[0])
      document.getElementById("person-name").textContent = data[0].name
      document.getElementById("person-role").textContent = data[0].role
      document.getElementById("person-website").textContent = data[0].website
      document.getElementById("person-about").textContent = data[0].about
      document.getElementById("person-interests").textContent = data[0].interests
  })
  
  .catch(function (err) {
    console.log("Fetch problem show: " + err.message);
  });
  return (
    <div className="App">

   
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<BusinessCard/>} />
          <Route path="/new" element={<NewMember />} />
          <Route path="/delete" element={<DeleteMember />} />      
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
