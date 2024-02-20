import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { UseDustbin } from '../context/Dustbin';
import markerIcon from './102-1028357_png-library-waste-container-paper-trash-can-transprent-removebg-preview.png';
import fullmarker from './Orange-trash-bin-isolated-on-transparent-background-PNG-removebg-preview.png';
const mapStyles = {
    height: '90vh',
    width: '100%'
};

const Location = () =>
{
    const { dustbindata }=UseDustbin()
    return (
        <>
   <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={8}
                center={{ lat: 6.975229, lng: 81.034156 }} // Default center

            >

                {dustbindata.map( place => (
                    <Marker key={place.name} position={{ lat: place.location.lat, lng: place.location.lng }} title={place.address}
                        icon={{
                            url: place.fill ? fullmarker : markerIcon,
                            scaledSize: new window.google.maps.Size( 50, 50 ),
                        }}
                        animation={place.fill && window.google.maps.Animation.BOUNCE }
                    />
                ) )}
            </GoogleMap></>

    );
}



export default Location;
