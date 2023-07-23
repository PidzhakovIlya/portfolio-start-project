import React from "react";
import { styled } from "styled-components";
import { SociaListItem } from "./SocilListItem";



export const SocialList = () => {
    return (
        <StyledSocialList>
            <SociaListItem iconId={"githubIcon-heeader"} />
            <SociaListItem fill={"#fff"} iconId={"linkedinIcon-heeader"} />
            <SociaListItem iconId={"figmaIcon-heeader"} />
        </StyledSocialList>
    )
}

const StyledSocialList = styled.ul`
    display: flex;
    gap: 20px;
`