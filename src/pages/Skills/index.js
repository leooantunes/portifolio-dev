import React from 'react';
import { H1, Main, P } from '../../components/common/styles/Padroes';
import { ContainerIcons, ContainerSkill } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faNode, faSass, faGit} from '@fortawesome/free-brands-svg-icons'

function Skills() {
  return (
      <Main>
        <ContainerSkill>
          <H1>Skills And Experience</H1>
          <P>Minha principal área de atuação é o Front End e as linguagens mais utilizadas são o HTML, CSS, Javascript(Typescript) e meu framework favorito que é o ReactJs.</P>
          <P>Apesar de atuar como Front End, as vezes gosto de criar meu próprio Back End e por ter mais facilidade com Javascript, utilizo o NodeJs.</P>
        </ContainerSkill>
        <ContainerIcons>
          <FontAwesomeIcon icon={faHtml5}/>
          <FontAwesomeIcon icon={faCss3}/>
          <FontAwesomeIcon icon={faJs}/>
          <FontAwesomeIcon icon={faReact}/>
          <FontAwesomeIcon icon={faNode}/>
          <FontAwesomeIcon icon={faSass}/>
          <FontAwesomeIcon icon={faGit}/>
        </ContainerIcons>
      </Main>
  );
}

export default Skills;