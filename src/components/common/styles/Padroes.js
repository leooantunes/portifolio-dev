import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: opacity 1s;
    transition: 1s ease;
    height: 100vh;
    justify-content: space-evenly;
    @keyframes opacity {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;      
        }
    }
`

export const H1 = styled.h1`
    color: #FF2350;
    font-weight: bold;
    font-style: italic;
    font-size: 40px;
    text-transform: uppercase;
    font-family: 'Titillium Web', sans-serif;
    transform: translateY(-50%, -50%);
    :hover{
        animation: step 1s;
    }
    @keyframes step {
        0%{
            transform: translateY(0);
        }
        50%{
            transform: translateY(-20px);
        }
        100%{
            transform: translateY(0);        
        }
    }
`

export const P = styled.p`
    color: #ffffff;
    font-size: 15px;
    text-align: justify;
    letter-spacing: 1px;
`