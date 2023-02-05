import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContainerItems, Image, H1, Input, Button, ContainerItems1, ContainerPassword, ContainerItems2, Image1, Image2 } from "./styles";
import Logo from "./../../assets/logo.svg"
import Rectangle from "./../../assets/Rectangle 3.svg"
import Computador from "./../../assets/computador.svg"
import Senha from "../../assets/senha.svg"

function Login() {
  const navigate = useNavigate()



  function nextPage() {
    navigate("/Home")
  }




  return (

    <Container>

      <ContainerItems>
        <ContainerItems1>
          <p>Login</p>
          <Image src={Logo} />
          <H1>Bem Vindo ao <strong>painel</strong></H1>
          <Input type="email" placeholder="Digite seu e-mail"></Input>
          <ContainerPassword>
            <Input type="password" placeholder="Digite sua senha"></Input>
            <button ><img alt="senha" src={Senha}></img></button>
          </ContainerPassword>
          <Button onClick={nextPage}>Acessar</Button>
        </ContainerItems1>
        <ContainerItems2>
          <Image1 src={Rectangle} />
          <Image2 alt="computador" src={Computador}>

          </Image2>
        </ContainerItems2>
      </ContainerItems>

    </Container>
  )

}
export default Login