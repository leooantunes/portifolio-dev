import React, { useState } from "react";
import { ContainerInfo, ContainerAnimation } from "./style";
import { Main, H1, P } from "../../components/common/styles/Padroes";
import LogoReact from "../../content/images/svg/svgReact.svg";
import ReactLoading from 'react-loading';

function Home() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 2000);
  return (
    <Main>
      {!loading ? (
        <>
          <ContainerInfo>
            <H1>
              Leonardo, <br /> Web Developer
            </H1>
            <P>Front End Developer & Node.Js Student</P>
          </ContainerInfo>
          <ContainerAnimation>
            <img src={LogoReact} alt="animation-react" />
          </ContainerAnimation>
        </>
      ) : (
        <ReactLoading color="#FF2350" width={50} height={50} type="bars"/>
      )}
    </Main>
  );
}

export default Home;
