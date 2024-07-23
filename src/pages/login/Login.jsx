import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import style from "./Login.module.css";

export const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/" />;
  return (
    <section className={style.loginContainer}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </section>
  );
};
