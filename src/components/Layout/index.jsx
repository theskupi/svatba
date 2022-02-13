import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { WrapPageElement } from "../../../gatsby-browser"

import Header from "../Header"
import Counter from "../Counter"
import { GlobalStyle, Footer } from "./style"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <WrapPageElement>
      <GlobalStyle
      />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main>{children}</main>
      <Footer>
        <div>
          Do svatby zbývá <Counter /> dní.
        </div>
        <p>
          © {new Date().getFullYear()},{" "}
          <a href="https://skupi.codes/">Vlastík Skupien</a>
        </p>
      </Footer>
    </WrapPageElement>
  )
}

export default Layout
