import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticate } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticate) navigate("/");
  }, [isAuthenticate, navigate]);

  return isAuthenticate ? children : null;
};

export default ProtectedRoute;
