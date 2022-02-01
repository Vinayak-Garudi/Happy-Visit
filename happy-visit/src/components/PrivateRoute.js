// import React from 'react';
// import { Navigate, Route, Routes, Outlet } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// export default function PrivateRoute({ component: Component, ...rest }) {
//     const { currentUser } = useAuth()
//     return (
//         <>
//             <Routes>
//                 <Route
//                     {...rest}
//                     render={props => {
//                         currentUser ? <Component {...props} /> : <Navigate to={"/login"} />
//                     }} />
//             </Routes>
//         </>
//     )
// }

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({children}) => {
    const { currentUser } = useAuth();
    if (!currentUser) {
        return <Navigate to={"/login"} />
    }
  return children;
};

export default PrivateRoute;
