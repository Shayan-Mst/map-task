
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
