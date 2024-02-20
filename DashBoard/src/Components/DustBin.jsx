import React, { useEffect, useState } from 'react';
import { fetchFillData, updateAttributeInDatabase } from '../Firebase/Database';






const DustbinItem = ( { address, Date, dustbin_id, track_sent, fill } ) =>
{
    const onclickhandle = () =>
    {
        updateAttributeInDatabase( { dustbin_id } );
    };
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div className='d-flex flex-column'>
                <h5>{address}</h5>
                <p>{Date}</p>
            </div>
            {
                // !track_sent ? ( <button onClick={onclickhandle} className='btn btn-sm btn-danger' disabled>Clear</button> ) : ( <button className='btn btn-sm btn-info'>Process</button> )
            }

        </li> );
};
export const FillDustbins = () =>
{
    const [ dustbin, setdutbin ] = useState( [] );
    const callbackfill = value => setdutbin( value );
    useEffect( () =>
    {
        fetchFillData( callbackfill );


    }, [] );
    return (
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <h3 className='text-center'>Filled Dustbins</h3>
            </li>
            {dustbin?.length > 0 && dustbin?.map( ( ele, i ) => <DustbinItem {...ele} key={i} /> )}

        </ul>
    );
};
