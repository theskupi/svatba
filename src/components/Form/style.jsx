import styled from "styled-components"

export const FormContainer = styled.div`
  width: 40vw;
  margin: 5rem auto;
  text-align: center;
  background: white;
  border-radius: 25px;
  padding: 2rem;
  max-width: 100%;
  h3 {
    margin-top: 0;
  }
  input[type="text"],
  select {
    border: 1px solid #9d9d9d;
    box-shadow: none;
    border-radius: 5px;
    padding: 0.25rem;
  }
  @media screen and (max-width: 768px) {
    width: 80vw;
    margin: 5rem auto 0;
    padding: 1rem;
  }
`

export const FormWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
  text-align: left;
  p {
    margin-bottom: 0.5rem;
  }
  button {
    width: 100%;
    padding: 0.25rem;
    margin-top: 1rem;
    background-color: #233956;
    color: white;
    border-radius: 5px;
    font-family: inherit;
    font-weight: 700;
    font-size: 1rem;
    border: none;
    transition: all 0.3s ease;
    &:hover {
      background-color: #32517a;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`

export const Stepper = styled.div`
  width: 100%;
  height: 5px;
  position: relative;
  background: #f2f2f2;
  border-radius: 5px;
  margin: 1rem 0;
  &::after {
    content: "";
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    background: #d09d28;
    border-radius: 5px;
    width: ${props =>
      // @ts-ignore
      props.stepWidth};
  }
`
export const Flex = styled.div`
  display: flex;
  justify-content: ${props =>
    // @ts-ignore
    props.justify};
  align-items: flex-end;
  & > div {
    width: 50%;
  }
  & > div:last-of-type {
    margin-left: 5%;
  }
  @media screen and (max-width: 768px) {
    & > div:last-of-type {
      margin-left: 5%;
      /* width: 40%; */
    }
  }
`

export const CustomErrorMsg = styled.div`
  font-size: 12px;
  color: #8a2628;
  margin-top: 0.5rem;
`
export const InlineTextInput = styled.div`
  label {
    display: block;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    margin-top: 0.5rem;
  }
`
