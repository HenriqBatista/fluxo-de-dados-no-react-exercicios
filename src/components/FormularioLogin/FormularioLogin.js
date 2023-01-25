import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const login = () => {
    props.setPageFlow(2);
  };

  const HandleNome = (event) => {
    props.setNome(event.target.value);
    console.log(props.inputNome);
  };
  const HandleFoto = (event) => {
    props.setFoto(event.target.value);
    console.log(props.inputFoto);
  };

  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={props.inputNome} onChange={HandleNome} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={props.inputFoto} onChange={HandleFoto} />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
