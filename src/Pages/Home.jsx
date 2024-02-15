import React from 'react';
import { FillDustbins } from '../Components/DustBin';
import { GoogleMap, Marker } from '@react-google-maps/api';
import markerIcon from './map-marker-icon-342x512-gd1hf1rz.png'
const mapStyles = {
    height: '500px',
    width: '100%'
};

const bounds = {
    north: 41.8781, // Latitude of the northern boundary
    south: 40.7128, // Latitude of the southern boundary
    east: -74.006, // Longitude of the eastern boundary
    west: -87.6298 // Longitude of the western boundary
};
const Home = () => {
    return (
        <div className='container mt-5'>
            <div className='row vh-75'>
                <div className='col-lg-8'>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={5}
                        center={{ lat: 37.7749, lng: -122.4194 }} // Default center
                        options={{ restriction: { latLngBounds: bounds }, gestureHandling: 'cooperative' }}
                    >

                        <Marker key={343} position={{ lat: 40.85003, lng: -75.65005 }} icon={{
                            url: markerIcon,
                            scaledSize: new window.google.maps.Size( 40, 40 ), // Adjust the size of the marker icon
                            origin: new window.google.maps.Point( 0, 0 ), // Set the origin point of the icon
                            anchor: new window.google.maps.Point( 20, 40 ) // Set the anchor point of the icon
                        }}
                             />

                    </GoogleMap>
                </div>
                <div className='col-lg-4'>
<FillDustbins/>
                </div>
            </div>

        </div>
    );
}



export default Home;
