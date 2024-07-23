import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function NavBar() {
  const { login, userLogout } = useContext(UserContext);

  return (
    <header>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.home}>
            <Link to="/"> Desafio-Virtex </Link>
          </li>
          {!login ? (
            <div className={styles.containerAuth}>
              <li className={styles.login}>
                <Link to="/login">Entrar</Link>
              </li>
              <li className={styles.register}>
                <Link to="/signup">Registrar-se</Link>
              </li>
            </div>
          ) : (
            <li className={styles.login}>
              <Link onClick={userLogout} href="/logout">
                Sair
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
