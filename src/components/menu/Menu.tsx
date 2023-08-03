import React from "react";
import {styled} from "styled-components";
import {theme} from "../../styles/Theme";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    )
}

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 98px;
    list-style: none; 
  }
`
const ListItem = styled.li`

`
const Link = styled.a`
  font-size: 50px;
  font-weight: 400;

`