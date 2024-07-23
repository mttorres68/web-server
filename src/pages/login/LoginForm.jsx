import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import useForm from "../../hooks/useForm";
import Error from "../../utils/Error";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./LoginForm.module.css";

export default function LoginForm() {
  const { userLogin, error, loading } = useContext(UserContext);
  const email = useForm("email");
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  }

  return (
    <div className={style.formContainer}>
      <div className={style.titleLogin}>
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Input label="Email" name="email" {...email} />
        <Input label="Senha" name="password" type="password" {...password} />
        <Error error={error} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button type="submit"> Entrar</Button>
        )}
        <div className={style.register}>
          <p>Não tenho uma conta? </p>
          <Link to="/signup">Registrar</Link>
        </div>
      </form>
    </div>
  );
}
