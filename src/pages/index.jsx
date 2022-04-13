import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ParallaxSection from "../components/Parallax/ParallaxSection"
import Form from "../components/Form"
import TextBox from "../components/TextBox"
import Colors from "../components/Colors"
import { ParallaxTextCentered, ParallaxYearCentered } from "../components/Parallax/style"

const IndexPage = () => (
	<Layout>
		<Seo title="Svatba" />

		<ParallaxSection
			side="left"
			year="2017"
			text="Seznámili jsme se v létě 2017 na hradě Švihov. Nikoliv ale jako Popelka a princ, nýbrž jako cirkusoví umělci. Fakt, že Vlastíka čekal Erasmus ve Španělsku nebyl ideální, ale zvládli jsme to. Foto z Valencijského jezera - Albufera 🌅"
		/>
		<ParallaxSection
			side="right"
			year="2018"
			text="Po návratu ze Španělska zjišťujeme, že Brno je od Ostravy poměrně z ruky a domlouváme se na společném bydlení. Na konci léta už Vlastík bydlí v Brně. Foto z našeho prvního obědu 🍕"
		/>
		<ParallaxSection
			side="left"
			year="2019"
			text="Ten pravý dospělácký život je tady. První práce na plný úvazek, péče o společný domov a tak dále. Čas na nějakou tu dovolenou se ale vždycky najde.  Foto ze Sevilly 🇪🇸"
		/>
		<ParallaxSection
			side="right"
			year="2020"
			text="Pandemie Covidu zasáhla Česko, objevujeme tak alespoň krásy Jižní Moravy. Vlastík se rozhodl, že nastal ten správný čas poohlédnout se po prstýnku. Foto z Národního parku Podyjí 👰🏻‍♀️"
		/>
		<ParallaxSection
			side="left"
			year="2021"
			text="Výroba prstenu se trochu protáhla a kvůli neustálým koronavirovým restrikcím je výběr vhodného místa omezen opět na okolí Brna. Řekla ANO! - 9. ledna jsme se zasnoubili v zasněženém panorama Babího lomu 💍"
		/>

		<TextBox margin={"20rem"}>
			<ParallaxYearCentered>2022?</ParallaxYearCentered>
			<ParallaxTextCentered>Uvidíte! Sami budete u toho.</ParallaxTextCentered>

		</TextBox>

		<TextBox heading={"Oganizační okénko"}>
			<p>
				Obřad je naplánován na <strong>11 hodin</strong>. Proto vás prosíme,
				abyste dorazili nejpozději o půl 11, ať máte čas se porozhlédnout a
				občerstvit. 🍸
			</p>
			<p>
				Žádný seznam dárků bohužel neexistuje. Jak jste se nahoře mohli dočíst,
				společnou domácnost obýváme už nějakou dobu a nic nám do ní nechybí.
				Pokud byste nechtěli přijít s prázdnou, budeme moc rádi, když nám
				přispějete na svatební cestu. 🏝️
			</p>
		</TextBox>
		<TextBox heading={"Bude párty"}>
			<p>
				Bude to skvělé, když s námi vydržíte slavit až do rána, protože jsme vám
				všem zajistili v areálu také <strong>ubytování</strong>. Přece jen, jak
				už adresa tohoto webu napovídá, věříme, že to bude pořádná párty 🥳
			</p>
			<p>
				Níže nám prosím vyplňte formulář, ať víme, s kým na ubytování počítat a
				můžeme tak předem naplánovat osazenstvo pokojů.
			</p>
		</TextBox>

		<Form />

		<TextBox>
			<p>
				A jestli ještě váháte, co na sebe, mrkněte na naše svatební barvy a
				můžete zkusit vybrat něco podobného.
			</p>
		</TextBox>

		<Colors />

		<TextBox heading="Těšíme se na vás!">Dáša ❤️ Vlastík</TextBox>
	</Layout>
)

export default IndexPage
