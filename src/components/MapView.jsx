import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { useMemo } from 'react';
import useSWR from 'swr';
import Spinner from '../components/Spinner';



export default function MapView({center}) {
 
  const { data, error , isLoading } = useSWR("/data/data.json");

 const points = useMemo(() => {
    
    if (!data) return [];
   
   return  data.slice(20,30);
   
     
  }, [data]);

  
  if (isLoading) return <Spinner/>;
  if (error) return <p>خطا در دریافت داده‌ها</p>;

  
  return (
    <div id="map" style={{ height: '90vh', width: '100%' }}>
      <MapContainer center={{ lat: 35.7006, lng: 51.3377 }} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {points.map(point => (
          <Marker key={point.id} position={[point.lat, point.lng]} >
            <Tooltip>{point.name}</Tooltip>
          </Marker>
        ))}
      </MapContainer>

      
    </div>
  );
}
