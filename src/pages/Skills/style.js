import styled from "styled-components";

export const ContainerSkill = styled.div`
  max-width: 530px;
`;

export const ContainerIcons = styled.div`
  svg {
    width: 100px !important;
    height: 100px;
    margin-right: 1rem;
    color: #ff2350;
    :hover {
      animation: step 1s;
    }
  }
  @keyframes step {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
