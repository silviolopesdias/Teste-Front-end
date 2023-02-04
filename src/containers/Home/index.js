import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, ContainerItems, ContainerMenu, ImageLogo, Button, Button1, ContainerFotos, H1, ContainerCard, ImageCard, Paragraph,Paragraph1, ButtonCard} from './styles'
import Image from "../../assets/logo.svg"
import Sinal from "./../../assets/sinal.svg"
import Relatorio from "../../assets/relatorio.svg"
import Seta from "../../assets/seta.svg"
import Fotos from "../../assets/fotos.svg"
import Calendario from "../../assets/calendario.svg"

function Home() {
    const navigate = useNavigate()

function backPage(){
    navigate('/')
}

    return (

        <Container>
            <ContainerMenu>
                
                <ImageLogo alt="logo" src={Image} />
                <Button onClick={backPage}><img alt="sinal" src={Sinal} />Inicio</Button>
                <Button1><img alt="Relatorio" src={Relatorio} />Contatos</Button1>
                <Button1><img alt="seta" src={Seta} />Relatórios</Button1>
                <Button1><img alt="Relatorio" src={Relatorio} />Contatos</Button1>
                <Button1><img alt="Relatorio" src={Relatorio} />Contatos</Button1>
                <Button1><img alt="Relatorio" src={Relatorio} />Contatos</Button1>

            </ContainerMenu>
            <ContainerItems>
                <H1>Olá <b>Usuário</b></H1>
                <hr></hr>
                <ContainerFotos>
                    <ContainerCard>
                       <div>
                        <ImageCard alt="foto" src={Fotos}></ImageCard>
                        </div>
                        <div className="two">
                        <ButtonCard><img alt="calendario" src={Calendario}/> 2min atrás</ButtonCard>
                        </div>
                        
                        <Paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesettin...</Paragraph>
                          <Paragraph1> Lorem Ipsum is simply dummy text of the printing and typesettin.</Paragraph1> 
                        
                    </ContainerCard>
                    <ContainerCard>
                       <div>
                        <ImageCard alt="foto" src={Fotos}></ImageCard>
                        </div>
                        <div className="four">
                        <ButtonCard><img alt="calendario" src={Calendario}/> 2min atrás</ButtonCard>
                        </div>
                        
                        <Paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesettin...</Paragraph>
                          <Paragraph1> Lorem Ipsum is simply dummy text of the printing and typesettin.</Paragraph1> 
                        
                    </ContainerCard>
              
                    <ContainerCard>
                       <div>
                        <ImageCard alt="foto" src={Fotos}></ImageCard>
                        </div>
                        <div className="five">
                        <ButtonCard><img alt="calendario" src={Calendario}/> 2min atrás</ButtonCard>
                        </div>
                        
                        <Paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesettin...</Paragraph>
                          <Paragraph1> Lorem Ipsum is simply dummy text of the printing and typesettin.</Paragraph1> 
                        
                    </ContainerCard>
                    </ContainerFotos>
                    <ContainerFotos>
                    <ContainerCard>
                       <div>
                        <ImageCard alt="foto" src={Fotos}></ImageCard>
                        </div>
                        <div className="six">
                        <ButtonCard><img alt="calendario" src={Calendario}/> 2min atrás</ButtonCard>
                        </div>
                        
                        <Paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesettin...</Paragraph>
                          <Paragraph1> Lorem Ipsum is simply dummy text of the printing and typesettin.</Paragraph1> 
                        
                    </ContainerCard>
                    <ContainerCard>
                       <div>
                        <ImageCard alt="foto" src={Fotos}></ImageCard>
                        </div>
                        <div className="seven">
                        <ButtonCard><img alt="calendario" src={Calendario}/> 2min atrás</ButtonCard>
                        </div>
                        
                        <Paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesettin...</Paragraph>
                          <Paragraph1> Lorem Ipsum is simply dummy text of the printing and typesettin.</Paragraph1> 
                        
                    </ContainerCard>
              
                    <ContainerCard>
                       <div>
                        <ImageCard alt="foto" src={Fotos}></ImageCard>
                        </div>
                        <div className="eigth">
                        <ButtonCard><img alt="calendario" src={Calendario}/> 2min atrás</ButtonCard>
                        </div>
                        
                        <Paragraph>
                            Lorem Ipsum is simply dummy text of the printing and typesettin...</Paragraph>
                          <Paragraph1> Lorem Ipsum is simply dummy text of the printing and typesettin.</Paragraph1> 
                        
                    </ContainerCard>
                    </ContainerFotos>
                
            </ContainerItems>

        </Container>
    )

}

export default Home