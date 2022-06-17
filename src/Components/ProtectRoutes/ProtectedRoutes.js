import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const authenticated = useSelector((state) => state.auth.isAuth);
  // console.log(authenticated);
  useEffect(() => {}, [authenticated]);

  if (authenticated) {
    // console.log(authenticated);
    return children;
  }

  return <Navigate to={"/"} replace />;
}

export default ProtectedRoutes;
