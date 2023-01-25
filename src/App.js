import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [inputNome, setNome] = useState("");
  const [inputFoto, setFoto] = useState("");
  const [inputImage, setImagem] = useState("");
  const [inputTitulo, setTitulo] = useState("");
  const [inputDescricao, setDescricao] = useState("");
  const [post,setPost] = useState({})
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header inputFoto={inputFoto} inputNome={inputNome} />
          {pageFlow === 1 ? (
            <FormularioLogin
              setPageFlow={setPageFlow}
              inputFoto={inputFoto}
              inputNome={inputNome}
              setFoto={setFoto}
              setNome={setNome}
            />
          ) : (
            <FormularioPostagem
              inputImage={inputImage}
              inputDescricao={inputDescricao}
              inputTitulo={inputTitulo}
              setImagem={setImagem}
              setTitulo={setTitulo}
              setDescricao={setDescricao}
              post={post}
              setPost={setPost}
            />
          )}
        </aside>
        <TelaDaPostagem
          inputImage={inputImage}
          inputDescricao={inputDescricao}
          inputTitulo={inputTitulo}
          post={post}
          setPost={setPost}
        />
      </Container>
    </>
  );
}

export default App;
