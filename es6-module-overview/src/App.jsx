import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
const [watches, setWatches]= useState([]);

useEffect(()=>{
  fetch('watches.json')
  .then(res => res.json())
  .then(data => setWatches(data)
  )
},[])

//   const watches = [
//   { id: 1, name: "Rolex Submariner", price: 9500 },
//   { id: 2, name: "Omega Seamaster", price: 5200 },
//   { id: 3, name: "Casio G-Shock GA2100", price: 120 },
//   { id: 4, name: "Apple Watch Series 9", price: 399 },
//   { id: 5, name: "Seiko 5 Sports", price: 275 }
// ];
  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
