import React from 'react';
import DataTable from 'react-data-table-component';
import { UseDustbin } from '../context/Dustbin';

const columns = [
    {
        name: 'Title',
        selector: row => row.id,
    },
    {
        name: 'Location',
        selector: row => row.location,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
    {
        name: 'Address',
        selector: row => row.address,
    },
];

const DustbinsDetails = () =>
{
    const { dustbindata } = UseDustbin();
    return (
        <div className='mt-3 vh-100 container'>
            <h3 className='text-center'>DustBin Details</h3>
            <DataTable
                columns={columns}
                data={dustbindata}
                pagination={true}
            />
        </div>

    );
}



export default DustbinsDetails;
