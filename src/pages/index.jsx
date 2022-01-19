import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Counter from "../components/Counter"
import ParallaxSection from "../components/Parallax/ParallaxSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Svatba" />
    <Counter />
    <ParallaxSection
      side="left"
      year="2021"
      text="9. ledna jsme se zasnoubili v zasněženém panorama Babího lomu kousek
          od Brna. Tehdy v Brně žádný sníh nebyl a proto při příjezdu mile
          překvapilo"
    />
    <ParallaxSection
      side="right"
      year="2022"
      text="9. ledna jsme se zasnoubili v zasněženém panorama Babího lomu kousek
          od Brna. Tehdy v Brně žádný sníh nebyl a proto při příjezdu mile
          překvapilo"
    />

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
