import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useUserLocation from './hooks/useUserLocation'
import './App.css'
import MapView from './components/MapView'

function App() {
  
 const { location } = useUserLocation();
  return (
    <>
     <MapView center={location}/>
    </>
  )
}

export default App
