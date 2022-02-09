import styled from "styled-components"

export const FormWrapper = styled.div`
  width: 60vw;
  margin: 5rem auto;
  text-align: center;
  max-height: 700px;
  position: relative;
  iframe {
    max-height: 700px;
  }
  @media screen and (max-width: 768px) {
    width: 95vw;
    margin-bottom: 0;
    iframe {
      max-width: 100%;
    }
  }
`
