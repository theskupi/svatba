import * as React from "react"
import { HeaderWrapper } from "./style"
import Counter from "../Counter/"

const Header = ({ siteTitle }) => (
  <header>
    <HeaderWrapper>
      <h1>{siteTitle}</h1>
      <h2>13.8.2022 | Resort Nová Polana</h2>
      <p>
        Už za <Counter /> dní se bereme a budeme moc rádi, když budete u toho!
      </p>
    </HeaderWrapper>
  </header>
)

export default Header
