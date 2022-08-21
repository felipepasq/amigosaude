import * as S from "./styles";
import Logo from "../../components/Logo/Logo";
import SignInModal from "./components/SignInModal/SignInModal";
import { useState } from "react";

export default function Home() {
  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <S.Wrapper>
      <SignInModal openModal={ModalOpen} setModalOpen={setModalOpen} />
      <S.SectionContainer>
        <S.InfoContainer>
          <Logo />
          <h2>O seu parceiro quando o assunto é cuidar da saúde</h2>
        </S.InfoContainer>
      </S.SectionContainer>
      <S.FormContainer>
        <p>Login</p>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Senha" />
        <S.LoginButton>Entrar</S.LoginButton>
        <S.SignInButton onClick={() => setModalOpen(true)}>
          Criar nova Conta
        </S.SignInButton>
        <span>Esqueceu a sua senha ?</span>
      </S.FormContainer>
    </S.Wrapper>
  );
}
