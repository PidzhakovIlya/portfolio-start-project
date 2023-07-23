import React from "react";
import { styled } from "styled-components";
import { FlexContainer } from "../../components/logo/FlexContainer";
import { SectionTitle } from "../../components/SectionTitle";
import { StyledSkill } from "./skill/StyledSkill";

export const MySkils = () => {
    return (
        <StyledSectionSkils>
            <SectionTitle>Projects</SectionTitle>
            <FlexContainer direction="column" align="center">
                <StyledSkill nameSkil="Html" experiens="Beginner" />    
                <StyledSkill nameSkil="CSS, Sass & Bootstrap" experiens="Beginner"/>    
                <StyledSkill nameSkil="JavaScript, TypeScript, JQuery" experiens="Beginner"/>    
                <StyledSkill nameSkil="UI design in Figma" experiens="Beginner"/>    
                <StyledSkill nameSkil="Angular" experiens="Beginner"/>    
                <StyledSkill nameSkil="React" experiens="Beginner"/>    
                <StyledSkill nameSkil="React Native" experiens="Beginner"/>    
            </FlexContainer>
            <SubTitle>Additional technologies and skills</SubTitle>   
            <FlexContainer>
                <ul>
                    <li>Git</li>
                    <li>Wordpress</li>
                    <li>Teamwork</li>
                    <li>Quick learning</li>
                    <li>Engagement</li>
                    <li>B2 english</li>
                    <li>RWD</li>
                </ul>
            </FlexContainer>
        </StyledSectionSkils>
    )
}

const StyledSectionSkils = styled.section`
    background-color: #161D2A;
    color: white;
    ul {
        display: flex;
        gap: 100px;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`

const SubTitle = styled.h3`
    font-size: 48px;
    text-align: center;
`