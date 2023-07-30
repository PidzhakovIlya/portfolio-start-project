import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper direction={"column"}>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi fuga praesentium
                        quam
                        quis quo, repellat repellendus vitae! Architecto asperiores assumenda cupiditate exercitationem
                        laudantium maxime quae quo ullam vel veritatis.</Text>
                    <Name>@Ivan Ivanow</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </Pagination>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Slide = styled.div`
  max-width: 500px;
  text-align: center;
`

const Text = styled.p`
`
const Name = styled.span`
  display: inline-block;
  margin: 22px 0 42px;
  font-size: 20px;
  text-transform: uppercase;
`
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: #d90707;
    border-radius: 20px;

    & + span {
      margin-left: 5px;
    }
    
    &.active {
      background-image: ${theme.colors.btnColor};
      width: 20px;
    }
  }



`