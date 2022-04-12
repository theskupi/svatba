import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ParallaxSection from "../components/Parallax/ParallaxSection"
import Form from "../components/Form"
import TextBox from "../components/TextBox"
import Colors from "../components/Colors"
import { ParallaxProvider } from "react-scroll-parallax"

const IndexPage = () => (
  <ParallaxProvider>
    <Layout>
      <Seo title="Svatba" />

      <ParallaxSection
        side="left"
        year="2017"
        text="Seznámili jsme se v létě 2017 na hradě Švihov. Nikoliv jako Popelka a princ, nýbrž jako cirkusoví umělci. Fakt, že byl Vlastík tou dobou přihlášený na Erasmus do Španělská nebyl ideální, ale zvládli jsme to. Foto z jezera Albufera u Valencie 🌅"
      />
      <ParallaxSection
        side="right"
        year="2018"
        text="Po návratu ze Španělska zjišťujeme, že Brno je od Ostravy poměrně z ruky a domlouváme se na společném bydlení. Na konci léta už Vlastík bydlí v Brně. Foto z našeho prvního obědu 🍕"
      />
      <ParallaxSection
        side="left"
        year="2019"
        text="Ten pravý dospělácký život je tady. První práce na plný úvazek, péče o domov a tak dále. Čas na nějakou tu dovolenou se ale vždycky najde. Foto z prázdnin v Seville 🇪🇸"
      />
      <ParallaxSection
        side="right"
        year="2020"
        text="Pandemie Covidu zasáhla Česko, objevujeme tak alespoň krásy Jižní Moravy. Vlastík se rozhodl, že nastal ten správný čas poohlédnout se po prstýnku. Foto z Národního parku Podyjí 💍"
      />
      <ParallaxSection
        side="left"
        year="2021"
        text="Výroba prstenu se trochu protáhla a kvůli neustálým koronavirovým restrikcím je výběr vhodného místa omezen opět na okolí Brna. Řekla ANO! - 9. ledna jsme se zasnoubili v zasněženém panorama Babího lomu 👰🏻‍♀️"
      />

      <TextBox heading={null}>
        <i>
          Snad vás náš příběh alespoň trochu zaujal. Pokračujte prosím dále,
          potřebujeme od vás zjistit pár doplňujících informací.
        </i>
      </TextBox>

      <TextBox heading={"Co k obědu?"}>
        <p>
          Je nám jasné, že ne všichni vyrostli na svíčkové jako Vlastík a nemusí
          tak jeho vášeň pro svíčkovou sdílet. Proto nám prosím dejte vědět, co
          byste si dali raději. Volit můžete z této dvojice:
        </p>
        <ul>
          <li>
            <strong>Hovězí svíčková na smetaně s variací knedlíků</strong>
          </li>
          <li>
            <strong>
              Plněné kuřecí prsíčko s bramborovo-celerovým pyré a pěnou z
              červené řepy
            </strong>
          </li>
        </ul>
      </TextBox>

      <TextBox heading={"Bude párty!"}>
        <p>
          Bude to skvělé, když s námi vydržíte slavit až do rána, protože jsme
          vám všem zajistili v areálu také <strong>ubytování</strong>. Přece
          jen, jak už adresa tohoto webu napovídá, věříme, že to bude pořádná
          párty 🥳
        </p>
      </TextBox>

      <Form />

      <TextBox heading={null}>
        <p>
          A jestli ještě váháte, co na sebe, mrkněte na naše barvy a můžete
          zkusit vybrat něco podobného.
        </p>
      </TextBox>

      <Colors />

      <TextBox heading="Těšíme se na vás!">Dáša ❤️ Vlastík</TextBox>
    </Layout>
  </ParallaxProvider>
)

export default IndexPage
