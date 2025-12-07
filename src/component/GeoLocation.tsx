import { useEffect, useState } from "react";

export default function GeoLocation(){
    const [Location,setLocation]=useState<{latitude: number; longitude: number} | null>(null)
    const [Error,setError]=useState("")

    const refresh=()=>{
        setLocation(null)
        setError("")
    }

    useEffect(()=>{
     if (!navigator.geolocation) {
        setError("Geolocation is not supported by this browser.")
        return;
     }
     function handleSuccess(position:any){
        const {latitude,longitude}=position.coords;
        setLocation({latitude,longitude})
     }
     function handleError(error:any){
      setError(error.message)
     }
     navigator.geolocation.getCurrentPosition(handleSuccess,handleError)

    },[])

    return {Location,Error,refresh};
}