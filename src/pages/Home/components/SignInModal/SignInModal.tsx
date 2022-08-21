import * as S from "./styles";
import Select from "../../../../components/Select/Select";
type SignInModalProps = {
  setModalOpen: (value: boolean) => void;
  openModal: boolean;
};

export default function SignInModal({
  setModalOpen,
  openModal,
}: SignInModalProps) {
  return (
    <>
      {openModal && (
        <S.ModalContainer>
          <S.ModalContent>
            <div>
              <h1>Cadastre - se</h1>
              <span
                className="material-symbols-outlined"
                onClick={() => setModalOpen(false)}
              >
                close
              </span>
            </div>
            <S.ModalForm>
              <input type="text" placeholder="Usuário" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Senha" />
              <input type="text" placeholder="Confirmar senha" />
            </S.ModalForm>
            <S.Date>
              <span>Data de nascimento</span>
              <div>
                <Select />
                <Select />
                <Select />
              </div>
            </S.Date>
          </S.ModalContent>
        </S.ModalContainer>
      )}
    </>
  );
}
