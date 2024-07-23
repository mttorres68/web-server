import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { UserStorage } from "./context/UserContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Login } from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route path="login/*" element={<Login />} />
            <Route path="signup/*" element={<SignUp />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
