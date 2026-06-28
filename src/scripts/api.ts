import type { FeatureCollection } from "../interfaces/GeoApify"

async function GetPlaces(categorie: String, coords: [number,number]){
    await fetch(`${import.meta.env.VITE_GEOAPIFY_API_URL}?categories=${categorie}&filter=circle:${coords[1],coords[0],5000}`)
    .then((response=>{
        if(!response.ok){
            throw new Error(`${response.status}`)
        }
        return response.json();
    })).then((data: FeatureCollection) =>{
        console.log(data);
    })
    .catch((err) => {
        console.log(err)
    })
}