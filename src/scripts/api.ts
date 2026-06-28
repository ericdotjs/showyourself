import type { FeatureCollection } from "../interfaces/GeoApify"
import {getCoordinates} from './settingMap'
import {printPlaces} from './fillPlaces'

export async function GetPlaces(categorie: String){
    const coords = await getCoordinates()
    await fetch(`${import.meta.env.VITE_GEOAPIFY_API_URL}?categories=${categorie}&filter=circle:${coords[1]},${coords[0]},5000&limit=20&apiKey=${import.meta.env.VITE_GEOAPIFY_API_KEY}`)
    .then((response=>{
        if(!response.ok){
            throw new Error(`${response.status}`)
        }
        return response.json();
    })).then((data: FeatureCollection) =>{
        printPlaces(data)
    })
    .catch((err) => {
        console.log(err)
    })
}