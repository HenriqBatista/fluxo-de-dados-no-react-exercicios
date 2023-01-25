import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = ({inputImage, inputDescricao, inputTitulo}) => {

  return (
    <ContainerPostagem>
      <TitleHeader>{inputTitulo}</TitleHeader>
      <Image src={inputImage} />
      <Description>{inputDescricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
