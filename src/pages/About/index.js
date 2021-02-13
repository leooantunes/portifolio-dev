import React from 'react';
import { Main, H1, P } from '../../components/common/styles/Padroes';
import { ContainerAbout, ContainerSimbolos } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJediOrder, faOldRepublic, faEmpire} from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
      <Main>
        <ContainerAbout>
          <H1>About Me :)</H1>
          <P>Olá, me chamo Leonardo Antunes e sou devenvolvedor Front-End, 
            sou muito bom com trabalho em equipe e apaixonado por ReactJS.
            Trabalho como Front-End à mais ou menos Três anos e
            sou muito fá de Star Wars e e-sports
          </P>
        </ContainerAbout>
        <ContainerSimbolos>
          <FontAwesomeIcon icon={faJediOrder}/>
          <FontAwesomeIcon icon={faOldRepublic}/>
          <FontAwesomeIcon icon={faEmpire}/>
        </ContainerSimbolos>
      </Main>
  );
}

export default About;