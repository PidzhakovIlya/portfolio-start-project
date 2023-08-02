import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SocialList} from "../../components/social/SocialList";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper gap={"134px"} wrap={"wrap"}>
                <a href="tel:12345678">Call me:<br/>123-456-789</a>
                <a href="email: ali@ali.ali">Email: <br/> xxx@xyz.ali.com</a>
            </FlexWrapper>
            <SocialList gap ={"65px"} width={"72px"} height={"72px"}/>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 100px 260px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  

  a {
    font-size: 42px;
    text-align: start;
    text-decoration: none;
    color: #fff;
  }
`
