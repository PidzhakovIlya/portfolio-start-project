import React from "react";
import { Icon } from "../icon/Icon";
import { styled } from "styled-components";

type SociaListItemPropsType = {
    iconId: string
    fill?: string
    width?: string
    height?: string
}

export const SociaListItem = (props: SociaListItemPropsType) => {
    return (
        <StyledSocialListItem>
            <a href="#">
                <Icon width={props.width} height={props.height} fill={props.fill} iconId={props.iconId} />
            </a>
        </StyledSocialListItem>
    )
}

const StyledSocialListItem = styled.li`
    
        list-style: none;
        /* color: white; */
`