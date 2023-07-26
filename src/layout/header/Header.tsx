import React from "react";
import {styled} from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {SocialList} from "../../components/social/SocialList";
import {Container} from "../../components/Container";
import {FlexContainer} from "../../components/FlexContainer";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items = ["Projects", "Technologies", "About me"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer justify={"space-around"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <SocialList/>
                </FlexContainer>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  background-color: #0F1624;
  padding: 44px 0;
  font-size: 30px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

`