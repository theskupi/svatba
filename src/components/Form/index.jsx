import React, { useState } from "react"
import { FormWrapper } from "./style"

const Form = () => {
  const [formData, setFormData] = useState({
    userName: "",
    menu: "",
    childPortion: false,
    acommodation: "",
  })

  const handleChange = e => {
    const { name } = e.target
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    setFormData(prevState => ({ ...prevState, [name]: value }))
    console.log(formData)
  }

  const handleSubmit = e => {
    const fields = {
      fields: {
        Name: formData.userName,
        Menu: formData.menu,
        DetskaPorce: formData.childPortion,
        Ubytovani: formData.acommodation,
      },
    }
    fetch("https://api.airtable.com/v0/appKy6aA4FaeDVl3g/svatebni_formular", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GATSBY_AIRTABLE_API}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    })
      .then(() => alert("Form Sent!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="jmeno">Jméno</label>
          <input
            id="jmeno"
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="menu1">Svíčková</label>
          <input
            type="radio"
            id="menu1"
            name="menu"
            value="menu1"
            checked={formData.menu === "menu1"}
            onChange={handleChange}
          />
          <label htmlFor="menu2">Kuřecí</label>
          <input
            type="radio"
            id="menu2"
            name="menu"
            value="menu2"
            checked={formData.menu === "menu2"}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="detskaPorce">Dětská porce</label>
          <input
            id="detskaPorce"
            type="checkbox"
            name="childPortion"
            checked={formData.childPortion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="ubytovaniAno">Ano</label>
          <input
            id="ubytovaniAno"
            type="radio"
            name="acommodation"
            value="ano"
            checked={formData.acommodation === "ano"}
            onChange={handleChange}
          />
          <label htmlFor="ubytovaniNe">Ne</label>
          <input
            id="ubytovaniNe"
            type="radio"
            name="acommodation"
            value="ne"
            checked={formData.acommodation === "ne"}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Odeslat</button>
      </form>
    </FormWrapper>
  )
}

export default Form
