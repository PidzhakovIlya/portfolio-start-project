import React from "react";
import myPhoto from "../../../assets/images/photo.png"
import {styled} from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import themPhoto from "../../../assets/images/drawing.svg"
import {font} from "../../../styles/Comman";


export const Main = () => {
    return (
        <StyledMine>
            <Container>
                <FlexWrapper align="center" justify="space-around" wrap = "wrap" >
                    <FlexWrapper direction={"column"} justify={"center"} align={"flex-start"}>
                        <Title>A WEB DEVELOPER</Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore et
                             dolore magna aliqua. </Text>
                        <button>Let’s begin</button>
                    </FlexWrapper>
                    <PhotoWrapper>
                        <StyledPhoto src={myPhoto} alt="my photo"/>
                    </PhotoWrapper>

                </FlexWrapper>
            </Container>
        </StyledMine>
    )
}

const Title = styled.h1`
  ${font({weight: 700, Fmax: 64, Fmin: 36, })};
  
`
const Text = styled.p`
  ${font({weight: 600, Fmax: 36, Fmin: 24,})}
  display: inline-block;
  max-width: 989px;
  margin: 34px 0 92px;
  color: ${theme.colors.textDescription};
  text-align: start;
 
`
const StyledMine = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-top: 136px;
`

const PhotoWrapper = styled.div`
  position: relative;    
  z-index: 0;
  
//   &::before {
//     content: url(${themPhoto});
//     position: absolute;
//     bottom: -50%;
//     right: -132px;
//     z-index: -1;
//    
//     @media ${theme.media.mobile} {
//       display: block;
//       width: 135px;  
//     }
//   }
`

const StyledPhoto = styled.img`
  width: 520px;
  height: 600px;
  object-fit: cover;
  border-radius: 50px 0;
  
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
    
  }
`
