import React from 'react';
import DataTable from 'react-data-table-component';
import { UseDustbin } from '../context/Dustbin';
import AddDustBin from './AddDustbin';

const columns = [
    {
        name: 'Title',
        selector: row => row.dustid,
    },
    {
        name: 'Location',
        selector: row => row.loc,
        hide:"md"
    },
    {
        name: 'Status',
        selector: row => row.fill && !row.track_sent ? <span className='badge bg-danger p-1'>Filled</span> : <span className='badge bg-secondary p-1'>Empty</span>
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
