import React from "react";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SocialList} from "../../components/social/SocialList";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Comman";
import {Container} from "../../components/Container";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"space-evenly"} align={"center"} wrap={"wrap"}>
                    <FlexWrapper gap={"134px"} align={"center"} wrap={"wrap"}>
                        <a href="tel:12345678">Call me:<br/>123-456-789</a>
                        <a href="email: ali@ali.ali">Email: <br/> xxx@xyz.ali.com</a>
                    </FlexWrapper>
                    <SocialList gap={"65px"} width={"72px"} height={"72px"}/>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};


  & a {
    ${font({weight: 600, Fmax: 42, Fmin: 28})};
    padding: 100px 0;
    text-align: start;
    text-decoration: none;
    color: #fff;
  }

  @media ${theme.media.tablet} {
    gap: 20px;
    padding: 20px 0;
    justify-content: center;
    
    & SocialList{
      width: 30px;
    }
    
    &  ${FlexWrapper} {
      
      justify-content: center;
      gap: 50px;
    }

    & ${FlexWrapper} ${FlexWrapper} a {
      padding: 20px 0;
      text-align: center;
    }
  }


}
`
