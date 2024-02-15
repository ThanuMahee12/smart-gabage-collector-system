import React from 'react';





const DustbinItem = ({address,Date,dustbin_id}) =>
{
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className='d-flex flex-column'>
                <h5>{address}</h5>
                <p>{Date}</p>
        </div>
        <button className='btn btn-sm btn-info'>Clear</button>
    </li> )
}
export const FillDustbins = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
               <h3 className='text-center'>Fill Dustbins</h3>
            </li>
<DustbinItem/>
        </ul>
    );
}
