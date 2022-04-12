import * as React from "react"
import { TextBoxWrapper } from "./style"

const Information = ({ heading, children, margin }) => (
  <TextBoxWrapper marginBottom={margin}>
    {heading && <h2>{heading}</h2>}
    {children}
  </TextBoxWrapper>
)

export default Information
