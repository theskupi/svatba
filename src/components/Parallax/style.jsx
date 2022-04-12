import styled from "styled-components"

export const ParallaxImage = styled.div`
  margin: ${props =>
    // @ts-ignore
    props.alignment === "right" ? "0 25vw 0 0" : "0 0 0 25vw"};
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`
export const ParallaxYear = styled.div`
  font-size: 18rem;
  font-weight: 700;
  color: #d09d28;
  margin-left: ${props =>
    // @ts-ignore
    props.alignment === "right" ? "50vw" : "10vw"};
  @media screen and (max-width: 768px) {
    font-size: 9rem;
    margin: 0;
    text-align: center;
  }
`
export const ParallaxYearCentered = styled(ParallaxYear)`
  margin: 0 auto;
  text-align: center;
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
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    width: calc(90vw - 3rem);
    margin: 0 5vw;
  }
`

export const ParallaxTextCentered = styled(ParallaxText)`
  margin: -13rem auto 0;
  position: relative;
  @media screen and (max-width: 768px) {
    margin-top: -6.8rem;
    padding: 0.8rem;
  }
`

export const ParallaxContainer = styled.div`
  margin: 10rem 0;
  @media screen and (max-width: 768px) {
    margin: 5rem 0;
  }
`
