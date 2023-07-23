import React from "react";
import { styled } from "styled-components";

type StyledSkillPropsType = {
    nameSkil: string
    experiens: string
}

export const StyledSkill = (props: StyledSkillPropsType) => {
    return (
        <Skill>
            <div>
                <span>{props.nameSkil}</span>
                <span>{props.experiens}</span>
            </div>
            <StyledProgress>
                <StyledProgressBar></StyledProgressBar>
            </StyledProgress>
        </Skill>
    )
}


const StyledProgress = styled.div`
    height: 32px;
    width: 1320px;
	position: relative;
	background: #162950;;
	padding: 3px;
	box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
    border-radius: 83px;
    `
const StyledProgressBar = styled.span`
    width: 50%;
    height: 32px;
    border-radius: 83px;
    display: block;
    height: 100%;
    border-radius: 83px;
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);;
    position: relative;
    overflow: hidden;
    `

const Skill = styled.ul`
    color: #fff;
    width: 1320px;

 
`
