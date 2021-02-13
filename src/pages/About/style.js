import styled from 'styled-components';

export const ContainerAbout = styled.div`
    max-width: 530px;
    word-wrap: break-word;
`


export const ContainerSimbolos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    svg{
        width: 200px !important;
        height: 200px;
        margin-right: 1rem;
        color: #FF2350;
        animation: pulse 6s linear infinite;
    }
    svg{
    }
    @keyframes pulse {
        100%{
            transform: rotate(360deg);
        }
    }
`