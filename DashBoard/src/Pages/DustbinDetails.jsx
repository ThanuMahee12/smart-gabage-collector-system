import React from 'react';
import DataTable from 'react-data-table-component';
import { UseDustbin } from '../context/Dustbin';
import AddDustBin from './AddDustbin';
import { GoogleMap, Marker } from '@react-google-maps/api';
const columns = [
    {
        name: 'Title',
        selector: row => row.name,
    },
    {
        name: 'Location',
        selector: row =>
        {
            const { lat, lng } = row.location;
            return `(${lat},${lng})`
        },
        hide:"md"
    },
    {
        name: 'Status',
        selector: row => row.fill ? ( !row.track_sent ? <span className='badge bg-danger p-1'>Filled</span> : <span className='badge bg-warning p-1'>Process</span> ) : ( <span className='badge bg-secondary p-1'>Empty</span> )
    },
    {
        name: 'Address',
        selector: row => row.address,
    }, {
        name: "Action",
        selector: row =>
        {
           return(<div className='d-flex justify-content-center w-100'>
               <button className='btn btn-sm btn-info px-2 mx-1'><i className="bi bi-pen-fill"></i></button>
               <button className='btn btn-sm btn-danger px-2 mx-1'><i className="bi bi-trash-fill"></i></button>
            </div>)
        }
    }
];

const DustbinsDetails = () =>
{
    const { dustbindata } = UseDustbin();
    console.log(dustbindata);
    return (
        <div className='mt-3 vh-100 container position-relative'>
            <h3 className='text-center'>DustBin Details</h3>
            <AddDustBin/>


            <DataTable
                columns={columns}
                data={dustbindata}
                pagination={true}
                highlightOnHover={true}
                responsive={true}
                onRowClicked={row =>alert(row.name)}
            />
        </div>

    );
}



export default DustbinsDetails;
