import styled, { keyframes } from "styled-components"

export const HeaderWrapper = styled.div`
  width: 50vw;
  margin: 0 auto;
  margin-top: 10rem;
  text-align: center;
  color: #233956;

  h1 {
    margin-top: 2rem;
    margin-bottom: 0;
    font-size: 4rem;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`
const bounce = keyframes` 
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`
export const DownArrowWrapper = styled.div`
height: 30px;
  svg {
    width: 16px;
    height: 16px;
    animation: ${bounce} 2s linear infinite;
  }
`
