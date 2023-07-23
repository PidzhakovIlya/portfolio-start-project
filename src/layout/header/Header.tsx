import React from "react";
import { styled } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { SocialList } from "../../components/social/SocialList";


export const Header = () => {
    return (
        <StyledHeader>
           <Logo />
           <Menu />
           <SocialList />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #0F1624;
    color: #fff;
    height: 137px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 137px;
    font-size: 30px;
    font-family: "Poppins", sans-serif;
`