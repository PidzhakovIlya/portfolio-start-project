import React from "react";
import { styled } from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Technologies</a>
                </li>
                <li>
                    <a href="#">About me</a>
                </li>
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 98px;
        list-style: none;
    }
    a {
        color: white;
        text-decoration: none;
    }
`