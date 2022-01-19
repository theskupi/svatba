import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Parallax } from "react-scroll-parallax"
// import { RightImage, Year, TextBox } from "./style"
import "./style.scss"

function ParallaxSection({ side, year, text }) {
  return (
    <div>
      <Parallax className="custom-class" y={[0, 50]} tagOuter="figure">
        <div className={`parallax-image ${side}`}>
          <StaticImage
            src="../../images/zasnuby.webp"
            alt="zasnuby"
            placeholder="blurred"
          ></StaticImage>
        </div>
      </Parallax>
      <Parallax className="custom-class" y={[-50, -3000]} tagOuter="figure">
        <div className={`parallax-year ${side}`}>{year}</div>
      </Parallax>
      <Parallax className="custom-class" y={[100, 20]} tagOuter="figure">
        <div className={`parallax-text ${side}`}>{text}</div>
      </Parallax>
    </div>
  )
}

export default ParallaxSection
