import { useContext } from "react";
import { Input } from "../../components/Forms/Input";
import Error from "../../utils/Error";
import { Button } from "../../components/Forms/Button";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../context/UserContext";
import style from "./SignUp.module.css";

export const SignUp = () => {
  const { userSignUp, error, loading } = useContext(UserContext);
  const name = useForm();
  const email = useForm("email");
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();

    if (name.validate() && email.validate() && password.validate()) {
      userSignUp(name.value, email.value, password.value);
    }
  }
  return (
    <div className={style.formContainer}>
      <div className={style.titleSignUp}>
        <h1>Registrar-se</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          name="username"
          type="text"
          autoComplete="off"
          {...name}
        />
        <Input label="Email" name="email" type="email" {...email} />
        <Input
          label="Senha"
          name="password"
          type="password"
          autoComplete="on"
          {...password}
        />
        <Error error={error} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button type="submit"> Registrar-se</Button>
        )}
        <div className={style.register}>
          <p>Já tem uma conta? </p>
          <Link to="/login">Acessar</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
