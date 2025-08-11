import React, { useContext } from 'react';
import AuthContex from '../Contex/AuthContex/AuthContex';

const UseAuth = () => {
    const contex=useContext(AuthContex)
    return contex;
};

export default UseAuth;