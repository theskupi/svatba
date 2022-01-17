/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

export const WrapPageElement = ({ children }) => {
  return <ParallaxProvider>{children}</ParallaxProvider>
}
