import React from "react";
import {styled} from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={"First name"}/>
                    <Field placeholder={"Last Name"}/>
                    <Field placeholder={"Message"} as={"textarea"}/>
                    <Button type={"submit"}>Send Message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    )
}

const StyledContact = styled.section`

  & ${SectionTitle} {
    padding: 47px 0 47px 132px;;
  }

`
const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  padding-bottom: 100px;
  
  textarea {
    resize: none;
    height: 155px;
  }
`
const Field = styled.input`
  width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.borderColor};
  padding: 7px 15px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${theme.colors.font};

  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  };
  
  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`
