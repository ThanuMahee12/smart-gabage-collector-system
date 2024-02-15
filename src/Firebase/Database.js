import { DB } from './Fire';
import { ref, child, get } from "firebase/database";

export const fetchData = async () =>
{
    const dbRef = ref( DB );
    try
    {
        const snapshot = await get( child( dbRef, `Dustbin` ) );
        if ( snapshot.exists() )
        {
            return Object.values(snapshot.val());
        } else
        {
            console.log( "No data available" );
        }
    } catch ( error )
    {
        console.error( error );
    }

};
