import React from "react";
import myPhoto from "../../../assets/images/photo.png"
import {styled} from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import themPhoto from "../../../assets/images/drawing.svg"


export const Main = () => {
    return (
        <StyledMine>
            <Container>
                <FlexWrapper align="center" justify="space-around">
                    <FlexWrapper direction={"column"} justify={"center"} align={"flex-start"}>
                        <Title>A WEB DEVELOPER</Title>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. </Text>
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

const StyledPhoto = styled.img`
  max-width: 520px;
  height: 600px;
  object-fit: cover;
  border-radius: 50px 0;
`
const Title = styled.h1`
  font-size: 64px;
`
const Text = styled.p`
  margin: 34px 0 92px;
  color: ${theme.colors.textDescription};
  font-size: 36px;
  text-align: start;

`
const StyledMine = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  padding-top: 150px;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: url(${themPhoto});
    position: absolute;
    bottom: -50%;
    right: -132px;
    z-index: -1;
  }
`