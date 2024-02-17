import { DB } from './Fire';
import { ref, child, get,onValue } from "firebase/database";
import axios from 'axios';


// export const fetchData = async () =>
// {
//     const dbRef = ref( DB );
//     try
//     {
//         const result = await axios.get( "http://localhost/id_project/fetch.php" );
//         return result.data.map( ele =>
//         {
//             const { fill, loc, dustid, lac,track_sent,...other } = ele;
//             return { ...other, dustid: parseInt( dustid ), loc: parseFloat( loc ), lac: parseFloat( lac ), fill: Boolean( parseInt( fill ) ), track_sent: Boolean( parseInt( track_sent ) ) }
//         });
//     } catch ( error )
//     {
//         console.error( error );
//     }

// };
export const fetchData = ( updateCallback ) =>
{
    const dbRef = ref( DB );

    try
    {
        onValue( child( dbRef, 'Dustbin' ), ( snapshot ) =>
        {
            if ( snapshot.exists() )
            {
                updateCallback( Object.values( snapshot.val() ) );
            } else
            {
                console.log( 'No data available' );
            }
        } );
    } catch ( error )
    {
        console.error( error );
    }
};
// export const fetchData = async () =>
// {
//     const dbRef = ref( DB );
//     try
//     {
//         const snapshot = await get( child( dbRef, `Dustbin` ) );
//         if ( snapshot.exists() )
//         {
//             return Object.values(snapshot.val());
//         } else
//         {
//             console.log( "No data available" );
//         }
//     } catch ( error )
//     {
//         console.error( error );
//     }

// };

export const sentTrackData = async () =>
{
    const dbRef = ref( DB );
    try
    {
        const snapshot = await get( child( dbRef, `Dustbin` ) );
        if ( snapshot.exists() )
        {
            return Object.values( snapshot.val() );
        } else
        {
            console.log( "No data available" );
        }
    } catch ( error )
    {
        console.error( error );
    }

};
// export const fetchFillData = async () =>
// {

//     try
//     {
//         const result = await axios.get( "http://localhost/id_project/fetch.php" );
//         return result.data.filter(ele=>ele.fill==="1").map( ele =>
//         {
//             const { fill, loc, dustid, lac, track_sent, ...other } = ele;
//                 return { ...other, dustid: parseInt( dustid ), loc: parseFloat( loc ), lac: parseFloat( lac ), fill: Boolean( parseInt( fill ) ), track_sent: Boolean( parseInt( track_sent ) ) };

//         } );
//     } catch ( error )
//     {
//         console.error( error );
//     }

// };
export const fetchFillData = async () =>
{
    const dbRef = ref( DB );
    try
    {
        const snapshot = await get( child( dbRef, `Dustbin` ) );
        if ( snapshot.exists() )
        {
            const filldustbin = Object.values( snapshot.val() );
            return filldustbin.filter( ele => ele.fill === true );
        } else
        {
            console.log( "No data available" );
        }
    } catch ( error )
    {
        console.error( error );
    }

};
