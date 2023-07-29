import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import projectImg1 from "../../../assets/images/project-1.webp"
import projectImg2 from "../../../assets/images/project-2.webp"

const worksItems = ["Project-1", "Project-2", "Project-3",]
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                <Work
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    src={projectImg1}
                    title={"PROJECT 1"}/>
                <Work
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    src={projectImg2}
                    title={"PROJECT 2"}/>
                <Work
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    src={projectImg2}
                    title={"PROJECT 2"}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
 
`

