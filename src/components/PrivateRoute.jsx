import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
// import { useState, CSSProperties } from "react";
// import ClipLoader from "react-spinners/ClipLoader";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    

    // if (loading){
    //     return  <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
    // }

    if (user){
        return children
    }
    return (
        <Navigate state={{from: location}} to="/login" replace>
            
        </Navigate>
    );
};

export default PrivateRoute;