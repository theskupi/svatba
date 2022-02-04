import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ParallaxSection from "../components/Parallax/ParallaxSection"
import Form from "../components/Form"
import TextBox from "../components/TextBox"
import Colors from "../components/Colors"

const IndexPage = () => (
  <Layout>
    <Seo title="Svatba" />

    <ParallaxSection
      side="left"
      year="2017"
      text="Seznámili jsme se v létě 2017 na hradě Švihov. Nikoliv ale jako Popelka a princ, nýbrž jako cirkusoví umělci. Fakt, že byl Vlastík tou dobou přihlášený na Erasmus do Španělská nebyl ideální, ale zvládli jsme to. Foto z Valencijského jezera - Albufera 🌅"
    />
    <ParallaxSection
      side="right"
      year="2018"
      text="Po návratu ze Španělska zjišťujeme, že Brno je od Ostravy poměrně z ruky a domlouváme se na společném bydlení. Na konci léta už Vlastík bydlí v Brně. Foto z našeho prvního obědu 🍕"
    />
    <ParallaxSection
      side="left"
      year="2019"
      text="Jak jsme se to naučili během Vlastíkova Erasmu, cestování se stalo naší nejoblíbenější kratochvílí. Foto z rakouských Alp ⛰"
    />
    <ParallaxSection
      side="right"
      year="2020"
      text="Pandemie Covidu tvrdě zasáhla Česko, objevujeme tak alespoň krásy Jižní Moravy. Vlastík se rozhodl, že nastal ten správný čas poohlédnout se po prstýnku. Foto z NP Podyjí 👰🏻‍♀️"
    />
    <ParallaxSection
      side="left"
      year="2021"
      text="Výroba prstenu se trochu protáhla a kvůli neustálým koronavirovým restrikcím je výběr vhodného místa omezen opět na okolí Brna. Řekla ANO! - 9. ledna jsme se zasnoubili v zasněženém panorama Babího lomu 💍"
    />

    <TextBox>
      <p>
        Snad vás náš příběh alespoň trochu pobavil. Pokračujte prosím dále,
        potřebuje od vás zjistit pár doplňujících informací.
      </p>
    </TextBox>

    <TextBox heading={"Co k obědu?"}>
      <p>
        Je nám jasné, že ne všichni vyrostli na svíčkové jako Vlastík a nemusí
        tak jeho vášeň pro svíčkovou sdílet. Proto nám prosím dejte vědět, co
        byste si nejraději dali. Volit můžete z této dvojice:{" "}
      </p>{" "}
      <ul>
        <li>Hovězí svíčková na smetaně s variací knedlíků</li>
        <li>
          Plněné kuřecí prsíčko s bramborovo-celerovým pyré a pěnou z červené
          řepy
        </li>
      </ul>
    </TextBox>

    <Form />

    <TextBox heading={"Bude párty"}>
      <p>
        Bude to skvělé, když s námi vydržíte slavit až do rána, protože jsme vám
        všem zajistili v areálu také <strong>ubytování</strong>. Přece jen, jak
        už adresa tohoto webu napovídá, věříme, že to bude pořádná párty 🥳{" "}
        <br /> Pokud o přespání nestojíte, dejte nám prosím co nejdřívě vědět.
      </p>
      <p>
        A jestli ještě váháte, co na sebe, mrkněte na naše barvy a můžete zkusit
        vybrat něco podobného.
      </p>
    </TextBox>

    <Colors />

    <TextBox heading="Těšíme se na vás!">Dáša a Vlastík</TextBox>
  </Layout>
)

export default IndexPage
