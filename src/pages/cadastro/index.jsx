import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import { Button } from "../../components/Button";

const schema = yup
  .object({
    password: yup
      .string()
      .min(3, "No mínimo 3 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Cadastro = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form>
              <Input
                name="nome completo"
                control={control}
                placeholder="Nome completo"
                leftIcon={<IoPerson />}
              />
              <Input
                name="email"
                control={control}
                placeholder="Email"
                type="email"
                leftIcon={<MdEmail />}
              />
              <Input
                errorMessage={errors?.password?.message}
                name="password"
                control={control}
                placeholder="Password"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <EsqueciText>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
                <CriarText>
                  Já tenho conta. <p>Fazer login</p>
                </CriarText>
              </EsqueciText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Cadastro;
