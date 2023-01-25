import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = () => {
  const handleTitulo = (event) => {
    props.setTitulo(event.target.value)
  }
  const handleImage = (event) => {
    props.setImagem(event.target.value)
  }
  const handleDescricao = (event) => {
    props.setDescricao(event.target.value)
  }
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={props.inputTitulo} onChange={handleTitulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.inputImage} onChange={handleImage}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.inputDescricao} onChange={handleDescricao} />
        </StyledLabel>
      </Form>
      <SendButton onClick={} >Fazer Postagem</SendButton>
    </FormContainer>
  );
};

export default FormularioCadastro;
