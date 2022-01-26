import * as React from "react"
import { TextBoxWrapper } from "./style"

const Information = ({ heading, children }) => (
  <TextBoxWrapper>
    <h2>{heading}</h2>
    {children}
  </TextBoxWrapper>
)

export default Information
