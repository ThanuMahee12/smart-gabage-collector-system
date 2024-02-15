import React from 'react';
import DataTable from 'react-data-table-component';
import { UseDustbin } from '../context/Dustbin';
import AddDustBin from './AddDustbin';

const columns = [
    {
        name: 'Title',
        selector: row => row.name,
    },
    {
        name: 'Location',
        selector: row => row.location,
        hide:"md"
    },
    {
        name: 'Status',
        selector: row => row.fill ? <span className='badge bg-danger p-1'>Filled</span> : <span className='badge bg-secondary p-1'>Empty</span>
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
            {/* <div className='fixed-bottom d-flex w-100 justify-content-end p-2'>
                <button className='d-block btn btn-dark rounded rounded-circle p-3 mb-4 me-2'><i className="bi bi-plus-circle-fill h3"></i></button>
            </div> */}

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
