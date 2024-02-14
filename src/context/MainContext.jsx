import React from 'react';
import DustbinContext from './Dustbin';


const MainContextProvider = ({children}) => {
    return (

            <DustbinContext>
            {children}
</DustbinContext>


    );
}



export default MainContextProvider;
