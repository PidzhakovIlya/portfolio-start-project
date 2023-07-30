import React from "react";
import { styled } from "styled-components";
import { SociaListItem } from "./SocilListItem";

type SocialListPropsType = {
    width?: string
    height?: string
    gap?: string

}

export const SocialList = (props:SocialListPropsType) => {
    return (
        <StyledSocialList gap={props.gap}>
            <SociaListItem width = {props.width} height={props.height} iconId={"githubIcon-heeader"} />
            <SociaListItem width = {props.width} height={props.height} fill={"#fff"} iconId={"linkedinIcon-heeader"} />
            <SociaListItem width = {props.width} height={props.height} iconId={"figmaIcon-heeader"} />
        </StyledSocialList>
    )
}

const StyledSocialList = styled.ul<SocialListPropsType>`
    display: flex;
    gap: ${props => props.gap};
`