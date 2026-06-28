import L from 'leaflet'
import 'leaflet/dist/leaflet.css';

function getCoordinates(): Promise<[number, number]> {

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log([position.coords.latitude, position.coords.longitude])
                resolve([position.coords.latitude, position.coords.longitude]);
            },
            (error) => reject(error),
            {
                timeout: 5000,
                maximumAge: 0,
                enableHighAccuracy: true
            }
        );
    });
}

export async function buildMap() {
    const coords: Promise<[number, number]> =  getCoordinates();
    const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY;
    const map = L.map('map').setView(await coords, 25)
    const geoapifyUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${apiKey}`;

    L.tileLayer(geoapifyUrl, {
        attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
        maxZoom: 20,
        id: 'osm-bright'
    }).addTo(map);

    L.marker(await coords).addTo(map)
        .bindPopup('¡Estás aquí!')
        .openPopup();

    return map;
}