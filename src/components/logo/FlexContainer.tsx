import { styled } from "styled-components";

type FlexContainerPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}

export const FlexContainer = styled.section<FlexContainerPropsType>`
    display: flex;   
    flex-direction: ${props => props.direction || "row" };
    justify-content: ${ props=> props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    background-color: #0F1624;
`

