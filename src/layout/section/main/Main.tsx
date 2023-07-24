import React from "react";
import myPhoto from "../../../assets/images/photo.png"
import { styled } from "styled-components";
import { FlexContainer } from "../../../components/FlexContainer";

export const Main = () => {
    return (
        <StyledMine>
            <FlexContainer align="center" justify="space-around" >
                <div>
                    <Title>A WEB DEVELOPER</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                    <button>Let’s begin</button>
                </div>

                <StyledPhoto src={myPhoto} alt="my photo" />
            </FlexContainer>
        </StyledMine>
    )
}

const StyledPhoto = styled.img`
    width: 520px;
    height: 600px;
    object-fit: cover;
    border-radius: 50px 0;
`
const Title = styled.h1`
    color: #fff;
    font-size: 64px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
`
const Text = styled.p`
    color: #BCBCBC;
    font-family: "Poppins", sans-serif;
    font-size: 36px;
    text-align: start;
`
const StyledMine = styled.section`
  background-color: #0F1624;
`