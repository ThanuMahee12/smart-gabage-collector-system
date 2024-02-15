import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
const mapStyles = {
    height: '90vh',
    width: '100%'
};
const bounds = {
    north: 41.8781, // Latitude of the northern boundary
    south: 40.7128, // Latitude of the southern boundary
    east: -74.006, // Longitude of the eastern boundary
    west: -87.6298 // Longitude of the western boundary
};
const Location = () => {
    return (
        <>
   <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={5}
            center={{ lat: 37.7749, lng: -122.4194 }} // Default center
            options={{ restriction: { latLngBounds: bounds }, gestureHandling: 'cooperative' }}
            >

            <Marker key={343} position={{ lat: 41.85003, lng: -87.65005 }} />

            </GoogleMap></>

    );
}



export default Location;
