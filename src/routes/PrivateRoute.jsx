import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthProviderContext);
    const location = useLocation();
    if (loading) {
        return <div className='flex justify-center items-center h-screen'><progress className="progress w-56 "></progress>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
;
};

export default PrivateRoute;