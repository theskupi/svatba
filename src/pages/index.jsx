import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ParallaxSection from "../components/Parallax/ParallaxSection"
import Form from "../components/Form"
import TextBox from "../components/TextBox"

const IndexPage = () => (
  <Layout>
    <Seo title="Svatba" />

    <ParallaxSection
      side="left"
      year="2017"
      text="9. ledna jsme se zasnoubili v zasněženém panorama Babího lomu kousek
          od Brna. Tehdy v Brně žádný sníh nebyl a proto při příjezdu mile
          překvapilo"
    />
    <ParallaxSection
      side="right"
      year="2018"
      text="9. ledna jsme se zasnoubili v zasněženém panorama Babího lomu kousek
          od Brna. Tehdy v Brně žádný sníh nebyl a proto při příjezdu mile
          překvapilo"
    />
    <ParallaxSection
      side="left"
      year="2019"
      text="9. ledna jsme se zasnoubili v zasněženém panorama Babího lomu kousek
          od Brna. Tehdy v Brně žádný sníh nebyl a proto při příjezdu mile
          překvapilo"
    />
    <ParallaxSection
      side="right"
      year="2020"
      text="9. ledna jsme se zasnoubili v zasněženém panorama Babího lomu kousek
          od Brna. Tehdy v Brně žádný sníh nebyl a proto při příjezdu mile
          překvapilo"
    />
    <ParallaxSection
      side="left"
      year="2021"
      text="9. ledna jsme se zasnoubili v zasněženém panorama Babího lomu kousek
          od Brna. Tehdy v Brně žádný sníh nebyl a proto při příjezdu mile
          překvapilo"
    />

    <TextBox heading={"Zúčastněte se tvorby naší svatební tabule"}>
      <p>
        Je nám jasné, že ne všichni vyrostli na svíčkové jako Vlastík a nemusí
        tak jeho vášeň pro svíčkovou sdílet. Proto nám prosím dejte vědět, co
        byste si nejraději dali. Volit můžete mezi zmiňovanou{" "}
        <i>Hovězí svíčkovou na smetaně s variací knedlíků</i> nebo{" "}
        <i>
          Plněným kuřecím prsíčkem s bramborovo-celerovým pyré a pěnou z červené
          řepy
        </i>
        .
      </p>
    </TextBox>

    <Form />

    <TextBox heading={"Bude párty"}>
      <p>
        Bude to skvělé, když s námi vydržíte slavit až do rána, protože jsme vám
        všem zajistili v areálu také ubytování. Přece jen, jak už adresa tohoto
        webu napovídá, věříme, že to bude pořádná párty 🥳 <br /> Pokud o
        přespání nestojíte, dejte nám prosím co nejdřívě vědět.
      </p>
      <p>
        A jestli ještě váháte, co na sebe, mrkněte na naše barvy a zkuste vybrat
        něco podobného.
      </p>
    </TextBox>
  </Layout>
)

export default IndexPage
