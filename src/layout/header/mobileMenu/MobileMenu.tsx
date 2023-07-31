import React from "react";
import {css, styled} from "styled-components";
import {theme} from "../../../styles/Theme";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
<<<<<<< HEAD
            <BurgerButton $isOpen={true}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup $isOpen={true}>
=======
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={true}>
>>>>>>> origin/main
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="#">{
                                item}
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                                <Mask>
                                    <span>{item}</span>
                                </Mask>
                            </Link>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuPopup>

        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
    display: none;
  
  @media ${theme.media.tablet} {
    display: block;
  }
`
<<<<<<< HEAD
const MobileMenuPopup = styled.div<{$isOpen: boolean}>`
=======
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
>>>>>>> origin/main
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${theme.colors.secondaryBg};
  opacity: 0.5; 
  z-index: 99999;
  
<<<<<<< HEAD
  ${props => props.$isOpen && css`
=======
  ${props => props.isOpen && css`
>>>>>>> origin/main
    display: flex; 
    justify-content: center;
    align-items: center;
  `}
  
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 98px;
    list-style: none;
  }
`

<<<<<<< HEAD
const BurgerButton = styled.button<{$isOpen: boolean}>`
=======
const BurgerButton = styled.button<{isOpen: boolean}>`
>>>>>>> origin/main
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    bottom: 50px;
    left: 40px;

<<<<<<< HEAD
    ${props => props.$isOpen && css`
=======
    ${props => props.isOpen && css`
>>>>>>> origin/main
      background-color: rgba(255, 255, 255, 0.02);
    `}
  }

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);
      
<<<<<<< HEAD
       ${props => props.$isOpen && css`
=======
       ${props => props.isOpen && css`
>>>>>>> origin/main
         transform: rotate(-45deg) translateY(0px)
       `};
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);
      
<<<<<<< HEAD
       ${props => props.$isOpen && css`
=======
       ${props => props.isOpen && css`
>>>>>>> origin/main
         transform: rotate(45deg) translateY(0px);
         width: 36px;
       `};
    }

  }
`


const Link = styled.a`
  font-size: 30px;
  font-weight: 400;
  color: transparent; 
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  //outline: 1px solid red;
   color: ${theme.colors.font};

  & + & {
    top: 50%;
    span {
    display: inline-block;
    transform: translateY(-50%);
  }
}
`
const ListItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.font};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
    transition: 0.3s;
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
    
    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    
    }
  }

`