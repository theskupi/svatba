import React from "react"
import { ColorsWrapper, ColorBox } from "./style"

const Colors = () => {
  return (
    <ColorsWrapper>
      <ColorBox color="#9d9d9d" title="šedá" />
      <ColorBox color="#b8958b" title="starorůžová" />
      <ColorBox color="#8a2628" title="vínová" />
      <ColorBox color="#d09d28" title="horčicová" />
      <ColorBox color="#233956" title="tmavě modrá" />
    </ColorsWrapper>
  )
}

export default Colors
