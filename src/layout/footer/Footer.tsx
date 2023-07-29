import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SocialList} from "../../components/social/SocialList";

export const Footer = () =>{
    return(
        <StyledFooter>
            <FlexWrapper gap={"134px"}>
                <a href="email: ali@ali.ali">Email: <br/> ali@ali.ali</a>
                <a href="tel:12345678">Telephone:<br/>12345678</a>
            </FlexWrapper>
            <SocialList/>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  min-height: 326px;
  background-color: #f31717;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  

  a {
    font-size: 42px;
    text-align: center;
    text-decoration: none;
    color: #fff;
  }
`
