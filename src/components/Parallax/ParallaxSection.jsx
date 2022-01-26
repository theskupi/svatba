import React from "react"
import { Parallax } from "react-scroll-parallax"
import Fade from "react-reveal/Fade"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  ParallaxContainer,
  ParallaxImage,
  ParallaxYear,
  ParallaxText,
} from "./style"

function ParallaxSection({ side, year, text }) {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
            name
          }
        }
      }
    }
  `)

  const currentImgFile = allFile.edges.find(edge => edge.node.name === year)
  const image = getImage(currentImgFile?.node)
  return (
    <ParallaxContainer>
      <Parallax className="custom-class" y={[0, 50]} tagOuter="figure">
        <ParallaxImage
          // @ts-ignore
          alignment={side}
        >
          <GatsbyImage image={image} alt={`year-${year}-img`} />
        </ParallaxImage>
      </Parallax>
      <Parallax className="custom-class" y={[-50, -300]} tagOuter="figure">
        <ParallaxYear
          // @ts-ignore
          alignment={side}
        >
          {year}
        </ParallaxYear>
      </Parallax>
      <Parallax className="custom-class" y={[0, -50]} tagOuter="figure">
        <Fade>
          <ParallaxText
            // @ts-ignore
            alignment={side}
          >
            {text}
          </ParallaxText>
        </Fade>
      </Parallax>
    </ParallaxContainer>
  )
}

export default ParallaxSection
