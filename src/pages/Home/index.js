import React from "react";
import { ContainerInfo, ContainerAnimation } from "./style";
import {
  Main,
  H1,
  P
} from "../../components/common/styles/Padroes";

import LogoReact from "../../content/images/svg/svgReact.svg";

function Home() {
  return (
    <Main>
      <ContainerInfo>
        <H1>Leonardo, <br/> Web Developer</H1>
        <P>Front End Developer & Node.Js Student</P>
      </ContainerInfo>
      <ContainerAnimation>
        <img src={LogoReact} alt="animation-react" />
      </ContainerAnimation>
    </Main>
  );
}

export default Home;
