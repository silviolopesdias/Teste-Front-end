import React, {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContainerItems, Image, H1, Input, Button, ContainerItems1, ContainerPassword, ContainerItems2, Image1, Image2 } from "./styles";
import Logo from "./../../assets/logo.svg"
import Rectangle from "./../../assets/Rectangle 3.svg"
import Computador from "./../../assets/computador.svg"
import {VscEye, VscEyeClosed} from "react-icons/vsc"



function Login() {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [eyeIsClosed, setEyeState] = useState(false)


  function nextPage() {
    navigate("/Home")
  }


 function toggleShow (){
  if(inputRef.current.type === "password"){
    setEyeState(true)
    inputRef.current.type = "text"
  }else{
    setEyeState(false)
    inputRef.current.type = "password"
  }

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
            <Input ref={inputRef}   type="password" placeholder="Digite sua senha"></Input>
            <button onClick={toggleShow}> {eyeIsClosed ? <VscEyeClosed/> : <VscEye/>}</button>
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