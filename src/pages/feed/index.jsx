import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import fotoPerfil from "../../assets/perfilbruno.jpeg";

import { Container, Column, Title, TitleHighLight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
          <UserInfo percentual={80} nome="Bruno Aguiar" imagem={fotoPerfil} />
          <UserInfo percentual={27} nome="Bruno Aguiar" imagem={fotoPerfil} />
          <UserInfo percentual={89} nome="Bruno Aguiar" imagem={fotoPerfil} />
          <UserInfo percentual={57} nome="Bruno Aguiar" imagem={fotoPerfil} />
          <UserInfo percentual={12} nome="Bruno Aguiar" imagem={fotoPerfil} />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
