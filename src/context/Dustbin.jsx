import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { fetchData } from '../Firebase/Database';

const reducer = ( state, action ) =>
{
    switch ( action.type )
    {
        case "ADD": state?.push( action.value );
            break;
        case "DELETE": {
            const index = state?.findIndex( ele => ele.dustid === action.value );
            state?.splice( index,1);
        };
            break;
        case "UPDATE": {
            const index = state?.findIndex( ele => ele.dustid === action.value );
            state[ index ] = action.value;
        };
            break;
        case "SET": {
            state = action.value;
        };
            break;
        default: state=[];
    }
    return state;

};

const DustbinContext = createContext( null );
const Dustbin = ( { children } ) =>
{
    const [ dustbindata, setdutbindata ] = useReducer( reducer, [] );

    useEffect( () =>
    {
        fetchData().then( result =>
        {
    setdutbindata({type:"SET",value:result})
})
    }, [setdutbindata] );
    return (
        <DustbinContext.Provider value={{ dustbindata, setdutbindata }}>
            {children}
        </DustbinContext.Provider>
    );
};
export const UseDustbin = () =>
{
    return useContext( DustbinContext );
};


export default Dustbin;
