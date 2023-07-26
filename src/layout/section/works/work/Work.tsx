import React from 'react';
import styled from "styled-components";


type WorkPropsType = {
    title: string
    text: string
    src: string
}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt="project-1"/>
            <Title>{props.title}</Title>
            <Description>{props.text}</Description>
            <button>Look it up</button>
        </StyledWork>
    );
};



const StyledWork = styled.div`
  max-width: 550px;
  width: 100%;
  height: 700px;
  border-radius: 0 50px;
  border: 1px solid #A39D9D;
  background: #0F1624;
  box-sizing: border-box;


`
const Image = styled.img`
  width: 100%;
  height: 266px;
  object-fit: cover;
`


const Description = styled.p`

`
const Title = styled.h3`
  color: #FFF;
  font-family: Poppins;
  font-size: 36px;
`