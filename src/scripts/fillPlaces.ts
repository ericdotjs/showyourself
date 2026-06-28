import type { FeatureCollection } from "../interfaces/GeoApify";
import type { Place, Places } from "../interfaces/Place"
import htmlContent from '../templates/placeCard.html?raw'

export function printPlaces(response: FeatureCollection) {
    const placesList: Place[] = []
    if (response.features) {
        response.features.forEach(obj => {
            if (obj) {
                const place: Place = { name: obj.properties.name, address: obj.properties.formatted, postcode: obj.properties.postcode, street: obj.properties.street, state: obj.properties.state, coordinates: obj.geometry.coordinates };
                placesList.push(place)
            }
        })
    }
    drawPlaces(placesList)
}

function drawPlaces(list: Place[]){
    const div = document.querySelector('#places_list')
    if(div){
        div.innerHTML = ``
        list.forEach(place => {
            div.appendChild(createPlaceComponent(place))
        })
    }

}

function createPlaceComponent(place: Place) {
    const component = document.createElement('div');
    component.innerHTML = htmlContent;
    const name = component.querySelector<HTMLHeadElement>("#PlaceName");
    const address = component.querySelector<HTMLHeadElement>("#PlaceAddress");
    const postcode = component.querySelector<HTMLHeadElement>("#PlacePostcode");
    const state = component.querySelector<HTMLHeadElement>("#PlaceState");
    const street = component.querySelector<HTMLHeadElement>("#PlaceStreet");
    if (name && address && postcode && state && state && street) {
        name.innerText = place.name;
        address.innerText = place.address;
        postcode.innerText = place.postcode;
        state.innerText = place.state;
        street.innerText = place.street;
    }

    return component;
}