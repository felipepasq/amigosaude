import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  font-family: ${({ theme }) => theme.fonts.text};
  z-index: 1;
`;

const ModalContent = styled.div`
  padding: 16px;
  width: fit-content;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  div {
    display: flex;
  }

  h1 {
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray};
  }

  .material-symbols-outlined {
    margin-left: auto;
    cursor: pointer;
  }
`;

const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 432px;
  gap: 12px;
  align-items: center;

  input {
    padding: 8px 12px;
    width: 100%;
    height: 44px;
    border-radius: 6px;
    border: 1px solid #dddfe2;
    font-family: ${({ theme }) => theme.fonts.text};
  }

  p {
    color: #bf1650;
    margin-right: auto;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin: 12px 0 12px;
  }
  div {
    grid-row: auto;
    gap: 20px;
  }

  select {
    height: 32px;
    width: 124px;
    padding: 0 8px;
    border-radius: 6px;
    border: 1px solid #dddfe2;
  }
`;
const RegisterButton = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.light_green};
  border-radius: 6px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
export { ModalContainer, ModalContent, ModalForm, Date, RegisterButton };
