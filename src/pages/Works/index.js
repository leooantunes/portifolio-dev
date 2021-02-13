import React from "react";
import { H1, Main, P } from "../../components/common/styles/Padroes";
import { ContainerProjects, ContainerSlides } from "./style";
import { Projects } from "./ProjectsData";
import Slider from "react-slick";

function Works() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    centerMode: true,
    pauseOnHover: true
  };
  return (
    <Main>
      <ContainerProjects>
        <H1>Projects e Certificates</H1>
        <P>Lista de projetos pessoais, profissionais e certificados na área</P>
      </ContainerProjects>
      <ContainerSlides>
      <div className="projects">
          <Slider {...settings}>
           {Projects.map((project, key) => {
             return(
               <div key={key}>
                  <a href={project.link}><img src={project.Image} alt="teste"/></a>
               </div>
             )
           })}
          </Slider>
        </div>
      </ContainerSlides>
    </Main>
  );
}

export default Works;
