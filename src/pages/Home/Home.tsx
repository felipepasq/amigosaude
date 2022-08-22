import * as S from "./styles";
import Logo from "../../components/Logo/Logo";
import SignInModal from "./components/SignInModal/SignInModal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

import { signInWithEmailAndPassword } from "firebase/auth";
export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [ModalOpen, setModalOpen] = useState(false);

  const onSubmit = (data: any) => {
    const { email, password } = data;
    console.log("teste");
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log("deu ruim");
      });
  };
  return (
    <S.Wrapper>
      <SignInModal openModal={ModalOpen} setModalOpen={setModalOpen} />
      <S.SectionContainer>
        <S.InfoContainer>
          <Logo />
          <h2>O seu parceiro quando o assunto é cuidar da saúde</h2>
        </S.InfoContainer>
      </S.SectionContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.FormContainer>
          <p>Login</p>
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
          />
          <input
            type="text"
            placeholder="Senha"
            {...register("password", {
              required: true,
            })}
          />
          <S.LoginButton type="submit">Entrar</S.LoginButton>
          <S.SignInButton onClick={() => setModalOpen(true)}>
            Criar nova Conta
          </S.SignInButton>
          <span>Esqueceu a sua senha ?</span>
        </S.FormContainer>
      </form>
    </S.Wrapper>
  );
}
