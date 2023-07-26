import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {Slider} from "../../components/slider/Slider";
import {FlexContainer} from "../../components/FlexContainer";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexContainer direction={"column"} align={"center"} >
                <Icon iconId={"logo"} viewBox={"0 0 50 50"}/>
                <Slider/>
            </FlexContainer>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
  min-height: 70vh;
`