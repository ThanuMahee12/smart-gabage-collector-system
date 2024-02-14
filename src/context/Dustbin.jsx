import React, { createContext } from 'react';
import PropTypes from 'prop-types';


const DustbinContext = createContext( null );
const Dustbin = ({children}) => {
    return (
        <DustbinContext.Provider>
            {children}
        </DustbinContext.Provider>
    );
}



export default Dustbin;
