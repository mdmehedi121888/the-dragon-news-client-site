import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  if (user) return children;
  return (
    <div>
      <Navigate state={{ from: location }} to={"/login"} replace></Navigate>
    </div>
  );
};

export default PrivateRoute;
