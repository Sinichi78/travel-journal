import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./style.css"
import data from "./data"

export default function App(){
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return(
    <div  className="sub-body">
      <Navbar/>
      {cards}      
    </div>
  )
}