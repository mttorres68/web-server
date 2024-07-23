/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useCallback, useEffect, useState } from "react";
import {
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET,
  USER_POST,
} from "../api/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(null);
  const navigate = useNavigate();

  async function getUser(token) {
    if (token) {
      const { url, options } = USER_GET(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      console.log(json);
      setLogin(true);
    }
  }

  async function userLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ email, password });
      const tokenRes = await fetch(url, options);
      const json = await tokenRes.json();
      if (json.ok === false) {
        throw new Error(" Usuário inválido");
      }

      const { token } = json;
      window.localStorage.setItem("userToken", token);
      await getUser(token);
      navigate("/");
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function userSignUp(name, email, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = USER_POST({ name, email, password });
      const tokenRes = await fetch(url, options);
      const json = await tokenRes.json();
      console.log(json);
      if (json.ok === false) {
        throw new Error(" Usuário inválido");
      }

      const { token } = json;
      window.localStorage.setItem("userToken", token);
      await getUser(token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  const userLogout = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("userToken");
    navigate("/login");
  }, [navigate]);

  async function autoLogin() {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        setError(null);
        setLoading(true);
        const { url, options } = TOKEN_VALIDATE_POST(token);
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Token inválido");
        await getUser(token);
      } catch (error) {
        userLogout();
      } finally {
        setLoading(false);
      }
    } else {
      setLogin(false);
    }
  }

  useEffect(() => {
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, data, login, userSignUp, userLogout, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
