import React from "react";
import {
  ContainerSidebar,
  LogoContainer,
  MenuContainer,
  RedesContainer,
} from "./style";
import {SidebarMenu, SidebarRedes} from '../Sidebar/sidebarData'; 
import { Link, NavLink } from "react-router-dom";
import Logo from '../../content/images/svg/la.svg';

function Sidebar() {

  console.log(window.location.pathname)

  return (
    <ContainerSidebar>
      <LogoContainer>
        <Link to="/Home"><img src={Logo} alt="logo-leo"/></Link>
      </LogoContainer>
      <MenuContainer>
        <ul>
          {SidebarMenu.map((item,key) => {
            return(
              <NavLink key={key} to={item.link} activeClassName="active">{item.icon} <br/> {item.title}</NavLink>
            )
          })}
        </ul>
      </MenuContainer>
      <RedesContainer>
          <ul>
          {SidebarRedes.map((item,key) => {
            return(
              <Link key={key} to={item.link} onClick={() => window.location.pathname = item.link} id={window.location.pathname === item.link ? 'active' : ''}>{item.icon}</Link>
            )
          })}
          </ul>
      </RedesContainer>
    </ContainerSidebar>
  );
}

export default Sidebar;
