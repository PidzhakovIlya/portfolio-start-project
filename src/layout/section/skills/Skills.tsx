import React from "react";
import {styled} from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledSkill} from "./skill/StyledSkill";
import {Container} from "../../../components/Container";
import {font} from "../../../styles/Comman";
import {theme} from "../../../styles/Theme";


const SkillData = [
    {
        nameSkill: "Html",
        experience: "Beginner"
    },
    {
        nameSkill: "CSS, Sass & Bootstrap",
        experience: "Beginner"
    },
    {
        nameSkill: "JavaScript, TypeScript, JQuery",
        experience: "Beginner"
    },
    {
        nameSkill: "UI design in Figma",
        experience: "Beginner"
    },
    {
        nameSkill: "Angular",
        experience: "Beginner"
    },
    {
        nameSkill: "React",
        experience: "Beginner"
    },
    {
        nameSkill: "React Native",
        experience: "Beginner"
    },
];

const SkillListData = [
    'Git',
    'Wordpress',
    'Teamwork',
    'Quick learning',
    'Engagement',
    'B2 english',
    'RWD',
];

export const MySkills = () => {
    return (
        <StyledSectionSkills>
            <Container>
                <SectionTitle>Technologies</SectionTitle>
                <SkillBarList>

                    {SkillData.map((s, index) => {
                        return <StyledSkill nameSkill={s.nameSkill} experience={s.experience} key={index}/>

                    })}

                </SkillBarList>
                <SubTitle>Additional technologies and skills</SubTitle>
                <SkillList>
                    {SkillListData.map((item)=>{
                        return <li>{item}</li>
                    })}
                </SkillList>
            </Container>
        </StyledSectionSkills>
    )
}

const StyledSectionSkills = styled.section`

`
const SkillBarList = styled.div`

`

const SkillList = styled.ul`
  max-width: 1920px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 33%));
  //grid-auto-rows: minmax(5px, auto);
  row-gap: 32px;
  justify-content: center;
  align-content: center;
  justify-items: start;
  align-items: center;
  padding-bottom: 160px;

  li {
    ${font({Fmax: 36, Fmin: 28})}
    list-style: disc;
    margin-left: 33%;
    text-align: start;
  }


`

const SubTitle = styled.h3`
  ${font({Fmax: 48, Fmin: 36})}
  text-align: center;
  padding: 160px 0 80px;

  @media ${theme.media.tablet} {
    padding: 50px 0 40px;
  }
`