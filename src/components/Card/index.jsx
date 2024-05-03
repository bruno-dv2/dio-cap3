import React from "react";
import fotoPerfil from "../../assets/perfilbruno.jpeg";
import logo from "../../assets/Untitled.jpeg";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";
import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={logo} />
      <Content>
        <UserInfo>
          <UserPicture src={fotoPerfil} />
          <div>
            <h4>Bruno Aguiar</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para o curso de HTML e CSS</h4>
          <p>
            Projeto feito com o curso de html e css no bootcamp dio do Global
            avanade...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
