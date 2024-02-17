import React, { useEffect, useState } from 'react';
import { fetchFillData } from '../Firebase/Database';






const DustbinItem = ({address,Date,dustbin_id,track_sent,fill}) =>
{
    const onclickhandle = () =>
    {

    }
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className='d-flex flex-column'>
                <h5>{address}</h5>
                <p>{Date}</p>
            </div>{
               !track_sent ? ( <button onclickhandle={onclickhandle} className='btn btn-sm btn-danger'>Clear</button> ) : ( <button onclickhandle={onclickhandle} className='btn btn-sm btn-info'>Process</button> )
        }

    </li> )
}
export const FillDustbins = () =>
{
    const [ dustbin, setdutbin] = useState([])
    useEffect( () =>
    {
        setInterval( () => fetchFillData().then( data => setdutbin( data ) ).catch( console.error ) ,2000)


    }, [ setdutbin ])
    return (
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
               <h3 className='text-center'>Fill Dustbins</h3>
            </li>
            {dustbin?.length > 0 && dustbin?.map( (ele,i) => <DustbinItem {...ele} key={i}/> )}

        </ul>
    );
}
