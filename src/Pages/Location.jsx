import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
const mapStyles = {
    height: '90vh',
    width: '100%'
};

const Location = () =>
{
    const places = [
        { id: 1, lat: 9.66304680, lng: 80.16508540 },
        { id: 2, lat: 9.06304680, lng: 80.16508545 },
        { id: 3, lat: 9.06364680, lng: 80.39508545 }
        // Add more places as needed
    ];
    return (
        <>
   <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={8}
                center={{ lat: 9.69304380, lng: 80.16518540 }} // Default center

            >

                {places.map( place => (
                    <Marker key={place.id} position={{ lat: place.lat, lng: place.lng }} title={place.name??"Hi"} />
                ) )}
            </GoogleMap></>

    );
}



export default Location;
