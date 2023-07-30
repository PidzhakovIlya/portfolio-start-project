import React from "react";
import {styled} from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledSkill} from "./skill/StyledSkill";
import {Container} from "../../../components/Container";

export const MySkils = () => {
    return (
        <StyledSectionSkills>
            <Container>
                <SectionTitle>Technologies</SectionTitle>
                <SkillBarList>
                    <StyledSkill nameSkil="Html" experiens="Beginner"/>
                    <StyledSkill nameSkil="CSS, Sass & Bootstrap" experiens="Beginner"/>
                    <StyledSkill nameSkil="JavaScript, TypeScript, JQuery" experiens="Beginner"/>
                    <StyledSkill nameSkil="UI design in Figma" experiens="Beginner"/>
                    <StyledSkill nameSkil="Angular" experiens="Beginner"/>
                    <StyledSkill nameSkil="React" experiens="Beginner"/>
                    <StyledSkill nameSkil="React Native" experiens="Beginner"/>
                </SkillBarList>
                <SubTitle>Additional technologies and skills</SubTitle>
                    <SkillList>
                        <li>Git</li>
                        <li>Wordpress</li>
                        <li>Teamwork</li>
                        <li>Quick learning</li>
                        <li>Engagement</li>
                        <li>B2 english</li>
                        <li>RWD</li>
                    </SkillList>
            </Container>
        </StyledSectionSkills>
    )
}

const StyledSectionSkills = styled.section`
    & ${SectionTitle} {
      padding: 130px 0 133px 132px;
    }

`
const SkillBarList = styled.div`

`

const SkillList = styled.ul`
  max-width: 1920px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(5px, auto);
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  padding-bottom: 160px;

  li {
    margin: 30px;
    align-self: center;
    width: 25%;
    font-size: 36px;
  }


`

const SubTitle = styled.h3`
  font-size: 48px;
  text-align: center;
  margin-top: 160px;
  margin-bottom: 80px;
`