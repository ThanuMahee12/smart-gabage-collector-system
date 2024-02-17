import React from 'react';
import { FillDustbins } from '../Components/DustBin';
import { GoogleMap, Marker } from '@react-google-maps/api';
import markerIcon from './map-marker-icon-342x512-gd1hf1rz.png'
const mapStyles = {
    height: '500px',
    width: '100%'
};

const Home = () =>
{
    const places = [
        { id: 1, lat: 9.66304680, lng: 80.16508540 },
        { id: 2, lat: 9.06304680, lng: 80.16508545 },
        { id: 3, lat: 9.06364680, lng: 80.39508545 }
        // Add more places as needed
    ];
    return (
        <div className='container mt-5'>
            <div className='row vh-75'>
                <div className='col-lg-8'>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={5}
                        center={{ lat: 9.69304680, lng: 80.16518540 }} // Default center

                    >

                        {places.map( place => (
                            <Marker key={place.id} position={{ lat: place.lat, lng: place.lng }} title={place.name ?? "Hi"} />
                        ) )}

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
