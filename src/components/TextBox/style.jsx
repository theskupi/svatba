import styled from "styled-components"

export const TextBoxWrapper = styled.div`
  width: 60vw;
  margin: 5rem auto;
  text-align: center;
  h2 {
    font-size: 2rem;
  }
  p {
    margin-bottom: 4rem;
    font-size: 1.2rem;
  }
  ul {
    text-align: left;
  }
  margin-bottom: ${props =>
    // @ts-ignore
    props.marginBottom};
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`
