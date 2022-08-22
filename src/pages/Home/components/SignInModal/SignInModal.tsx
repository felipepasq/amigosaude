import * as S from "./styles";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../../../firebase";

type SignInModalProps = {
  setModalOpen: (value: boolean) => void;
  openModal: boolean;
};

export default function SignInModal({
  setModalOpen,
  openModal,
}: SignInModalProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    const { email, password } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log("deu ruim");
      });
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <S.ModalForm>
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors.email && <p>Você deve inserir um email</p>}
                <input
                  type="password"
                  placeholder="Senha"
                  {...register("password", {
                    required: true,
                  })}
                />
                {errors.password && <p>Você deve inserir uma senha</p>}
                <input
                  type="password"
                  placeholder="Confirmar senha"
                  {...register("confirm_password", {
                    required: true,
                    validate: (val: string) => {
                      if (watch("password") != val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                />
                {errors?.confirm_password?.message && (
                  <p>Você deve inserir senhas iguais</p>
                )}
              </S.ModalForm>

              <S.RegisterButton type="submit">Cadastre - se</S.RegisterButton>
            </form>
          </S.ModalContent>
        </S.ModalContainer>
      )}
    </>
  );
}

{
  /* <input
                  type="birthday"
                  placeholder="Data de nascimento"
                  {...register("birthday", {
                    required: true,
                  })}
                />
                {errors?.birthday && (
                  <p>Você deve inserir sua data de nascimento</p>
                )} */
}

{
  /* <input
type="text"
placeholder="Usuário"
{...register("username", {
  required: true,
})}
/>
{errors.username && <p>Você deve inserir um nome</p>} */
}
