import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

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
                <span></span>
                <span></span>
            </Pagination>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
  border: 1px solid red;
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
`
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 30px;
    height: 20px;
    margin: 5px;
    background-color: #d90707;
    border-radius: 50%;
  }
`