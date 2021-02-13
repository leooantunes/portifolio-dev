import styled from 'styled-components';

export const ContainerInfo = styled.div`
    margin-bottom: 2rem;
`

export const ContainerAnimation = styled.div`
    img{
        width: 400px;
        height: 400px;
        animation: rotate 2s infinite;
        transition: 2s ease-in;
    }

    @keyframes rotate {
        to{
            transform: rotate3d(1, 1, 1, 360deg)
        }
    }
`