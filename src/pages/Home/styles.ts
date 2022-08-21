import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding-top: 240px;
`;
const SectionContainer = styled.div`
  width: 980px;
  padding: 0 80px;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.gray};
    font-family: ${({ theme }) => theme.fonts.text}, sans-serif;
    font-weight: 600;
    margin-top: 16px;
  }
`;
const FormContainer = styled.div`
  text-align: center;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  width: 400px;
  border-radius: 8px;
  padding: 20px;

  p {
    font-size: 32px;
    font-family: ${({ theme }) => theme.fonts.text}, sans-serif;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray};
  }

  input {
    font-size: 20px;
    padding: 8px 12px;
    width: 100%;
    height: 52px;
    border-radius: 6px;
    border: 1px solid #dddfe2;
  }
  input:first-of-type {
    margin: 12px 0 8px;
  }

  span {
    margin-top: 16px;
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.text}, sans-serif;
    color: ${({ theme }) => theme.colors.gray};

    :hover {
      color: ${({ theme }) => theme.colors.dark_gray};
    }
  }
`;

const LoginButton = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.text}, sans-serif;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);

  :hover {
    opacity: 0.9;
  }
`;

const SignInButton = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.text}, sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.colors.primary};

  :hover {
    opacity: 0.9;
  }
`;

export {
  Wrapper,
  InfoContainer,
  FormContainer,
  SectionContainer,
  LoginButton,
  SignInButton,
};
