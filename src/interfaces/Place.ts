export interface Place{
name: string,
address: string,
postcode: string,
state: string,
street: string,
coordinates: [number,number]
}

export interface Places{
    places: Place[]
}