import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
  const { login } = useContext(UserContext);

  if (login) {
    return children;
  } else if (!login) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
}
