import { Header } from "../../components/Header";
import banner from "../../assets/art.png";
import { useNavigate } from "react-router-dom";

import { Container, TextContent, Title, TitleHighlight } from "./styles";
import { Button } from "../../components/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o seu futuro agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com seus melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={banner} alt="Banner" />
        </div>
      </Container>
    </>
  );
};

export default Home;
