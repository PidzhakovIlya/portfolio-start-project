import React from "react";
import myPhoto from "../../../assets/images/photo.png"
import { styled } from "styled-components";
import { FlexContainer } from "../../../components/logo/FlexContainer";

export const Main = () => {
    return (
        <div>
            <FlexContainer align="center" justify="space-around" >
                <div>
                    <Tytle>A WEB DEVELOPER</Tytle>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                    <button>Let’s begin</button>
                </div>

                <StyledPhoto src={myPhoto} alt="my photo" />
            </FlexContainer>
        </div>
    )
}

const StyledPhoto = styled.img`
    width: 520px;
    height: 600px;
    object-fit: cover;
    border-radius: 50px 0;
`
const Tytle = styled.h1`
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