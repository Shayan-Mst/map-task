// swrConfig.jsx
import { SWRConfig } from 'swr';

//create a custome SWR Provider to wrap around the application in app.jsx

export function SWRProvider({ children }) {
  return (
   <SWRConfig
  value={{
  fetcher: (url) =>

    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("fetched!");
      return data;

    }),

    
     dedupingInterval: 300000, //not going to fetch multiple data with the same key before 5 minutes
       
    revalidateIfStale: false,          
    revalidateOnFocus: false,         
  }}
>
  {children}
</SWRConfig>

  );
}
