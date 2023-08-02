import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";


type WorkPropsType = {
    title: string
    text: string
    src: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <FlexWrapper direction={"column"} justify={"space-between"} >
                <Image src={props.src} alt="project-1"/>
                <Title>{props.title}</Title>
                <Description>{props.text}</Description>
                <button>Look it up</button>
            </FlexWrapper>
        </StyledWork>
    );
};


const StyledWork = styled.div`
  max-width: 550px;
  width: 100%;
  height: 700px;
  border-radius: 50px 0;
  border: 1px solid #A39D9D;
  background: #0F1624;
  padding: 25px;

  & ${FlexWrapper} {
    height: 100%;
  }

`
const Image = styled.img`
  width: 100%;
  height: 266px;
  object-fit: cover;
  border-radius: 24px 8px 8px 8px;
`


const Description = styled.p`
  text-align: start;
  font-size: 28px;
`
const Title = styled.h3`
  color: #FFF;
  font-size: 36px;
  position: relative;
  text-align: start;
  
  
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 300px;
    width: 100%;
    height: 4px;
    background-image: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
    border-radius: 83px;
  }
`