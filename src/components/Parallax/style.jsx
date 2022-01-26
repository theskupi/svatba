import styled from "styled-components"

export const ParallaxImage = styled.div`
  margin: ${props =>
    // @ts-ignore
    props.alignment === "right" ? "0 25vw 0 0" : "0 0 0 25vw"};
`
export const ParallaxYear = styled.div`
  font-size: 18rem;
  font-weight: 700;
  color: #d09d28;
  margin-left: ${props =>
    // @ts-ignore
    props.alignment === "right" ? "50vw" : "10vw"};
`
export const ParallaxText = styled.div`
  background: white;
  padding: 1.5rem;
  width: 40vw;
  margin: 1.5rem;
  font-size: 1.5rem;
  line-height: 1.5;
  color: #233956;
  margin-left: ${props =>
    // @ts-ignore
    props.alignment === "right" ? "50vw" : "5vw"};
`

export const ParallaxContainer = styled.div`
  margin: 10rem 0;
`