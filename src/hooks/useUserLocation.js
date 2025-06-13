import { useEffect, useState } from 'react';

export default function useUserLocation() {

  //azadi lat and lng position as default value of location
  const [location, setLocation] = useState({ lat: 35.7006, lng: 51.3377 }); 
  const [isLocated, setIsLocated] = useState(false);

  useEffect(() => {
    

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setIsLocated(true);
      },
      () => {
       //the user didnt allow to access their location
        setIsLocated(false);
      }
    );
  }, []);

  return { location, isLocated };
}
