import React from "react";
import {styled} from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {SocialList} from "../../components/social/SocialList";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Comman";

const items = ["Projects", "Technologies", "About me"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-around"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                    <SocialList gap={"30px"}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  ${font({Fmax: 30, Fmin: 20})}
  background-color: #0F1624;
  padding: 44px 0;
  //font-size: 30px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  
  
`
