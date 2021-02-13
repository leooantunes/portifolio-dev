import styled from "styled-components";

export const ContainerProjects = styled.div`
  max-width: 600px;
  width: 100%;
`;

export const ContainerSlides = styled.div`
  width: 100%;
  max-width: 1200px;
  .projects {
      max-width: 1200px;
    img{
        margin-right: 1rem;
        width: 300px;
    }
    button::before{
       color: #FF2350 !important;
    }
    .slick-arrow::before{
        display: none !important;
    }
  }
`;
