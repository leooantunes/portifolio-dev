import styled from 'styled-components';

export const ContainerSidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 80px;
    height: 100vh;
    background-color: #23235b;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 111111111;

    #active{
        padding: 0.5rem;
        border-radius: 25px;
        color: #23235b;
        background-color: #FF2350;
    }
`

export const LogoContainer = styled.div`
    img{
        width: 50px !important;
        height: 50px !important;
    }
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        list-style: none;
        padding: 0;
    }
    a{
        padding: 1rem;
        color: #FF2350;
        margin-bottom: 1rem;
    }
    svg{
        font-size: 20px;
    }
`

export const RedesContainer = styled.div`
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        padding: 0;
        color: #FF2350;
    }
    a{
        padding: 0.5rem;
        color: #FF2350;
    }
`