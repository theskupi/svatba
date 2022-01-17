import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Parallax } from "react-scroll-parallax"
import Counter from "../components/Counter"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Counter />

    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
      <div style={{ padding: "20px", border: "5px solid tomato" }}>test 1</div>
    </Parallax>
    <Parallax className="custom-class" y={[-60, 60]} tagOuter="figure">
      <div style={{ padding: "20px", border: "5px solid purple" }}>test 2</div>
    </Parallax>
    <Parallax className="custom-class" y={[0, 0]} tagOuter="figure">
      <div style={{ padding: "20px", border: "5px solid violet" }}>test 3</div>
    </Parallax>

    <iframe
      title="formular"
      id="formular"
      src="https://docs.google.com/forms/d/e/1FAIpQLSe4rLEpiYucg9NG-SEZh4-d7Q9ia_XO-mz8qMfjG2VUYw6kdg/viewform?embedded=true"
      width="640"
      height="1004"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
    >
      Loading…
    </iframe>
  </Layout>
)

export default IndexPage
