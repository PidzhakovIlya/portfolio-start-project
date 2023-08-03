import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Work} from "./work/Work";
import projectImg1 from "../../../assets/images/project-1.webp"
import projectImg2 from "../../../assets/images/project-2.webp"
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

const worksItems = ["Project-1", "Project-2", "Project-3",]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                {/*<Menu menuItems={worksItems}/>*/}
                <GridWrapper>
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
                    <Work
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        src={projectImg2}
                        title={"PROJECT 2"}/>
                </GridWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`

`

const GridWrapper = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(360px - 30px), 550px));
  grid-auto-rows: minmax(350px, auto);
  justify-content: center;
  align-content: center;
  gap: 97px 220px;
  padding-bottom: 200px;
  
  @media ${theme.media.mobile}{
    padding-bottom: 50px;
    gap: 30px;
  }
`