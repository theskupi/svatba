import styled from "styled-components"

export const ColorsWrapper = styled.div`
  width: 60vw;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 5rem;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`

export const ColorBox = styled.div`
  width: 3rem;
  height: 3rem;
  display: inline-block;
  background-color: ${props => props.color};

  & + & {
    margin-left: 1rem;
  }
`
