import React from 'react';
import { FillDustbins } from '../Components/DustBin';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { UseDustbin } from '../context/Dustbin';
import markerIcon from './102-1028357_png-library-waste-container-paper-trash-can-transprent-removebg-preview.png'
import fullmarker from './Orange-trash-bin-isolated-on-transparent-background-PNG-removebg-preview.png';
const mapStyles = {
    height: '500px',
    width: '100%'
};

const Home = () =>
{
    const { dustbindata } = UseDustbin()
    return (
        <div className='container mt-5 max-vh-100'>
            <div className='row h-100'>
                <div className='col-lg-8'>

                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={15}
                        gestureHandling={"greedy"}
                        center={{ lat: 6.982654, lng: 81.076669 }} // Default center

                    >

                        {dustbindata.map( place => (
                            <Marker key={place.name} position={{ lat: place.location.lat, lng: place.location.lng }} title={place.name}

                                icon={{
                                    url: place.fill?fullmarker:markerIcon,
                                    scaledSize: new window.google.maps.Size( 40, 40 ),
                                }}
                                animation={place.fill && window.google.maps.Animation.BOUNCE}

                            />
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
