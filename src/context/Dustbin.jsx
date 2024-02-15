import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';


const reducer = () =>
{

}

const DustbinContext = createContext( null );
const Dustbin = ( { children } ) =>
{
    const [dustbindata,setdutbindata]=useReducer(reducer,[],)
    return (
        <DustbinContext.Provider value={{ dustbindata, setdutbindata }}>
            {children}
        </DustbinContext.Provider>
    );
}
export const UseDustbin = () =>
{
    return useContext( DustbinContext );
}


export default Dustbin;
