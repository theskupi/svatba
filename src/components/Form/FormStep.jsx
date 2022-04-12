import React from "react"
import { CustomErrorMsg, Flex, FormWrapper, InlineTextInput } from "./style"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { Schema } from "./schema"

const FormStep = ({ persons, currentStep, setCurrentStep }) => {
  const handleStepChange = () => {
    setCurrentStep(prevStep => prevStep + 1)
  }

  const handleSubmit = values => {
    const fields = {
      fields: {
        Name: values.userName,
        Menu: values.menu,
        DetskaPorce: values.childPortion,
        Ubytovani: values.acommodation,
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

    handleStepChange()
  }

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          userName: "",
          menu: "",
          childPortion: false,
          acommodation: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values)
          resetForm()
        }}
        validationSchema={Schema}
      >
        {() => (
          <Form>
            <InlineTextInput>
              <label htmlFor="jmeno">
                <strong>Jméno</strong>
              </label>
              <Field id="jmeno" type="text" name="userName" />
              <div>
                <ErrorMessage component={CustomErrorMsg} name="userName" />
              </div>
            </InlineTextInput>

            <Flex
              // @ts-ignore
              justify="space-between"
            >
              {/* <div>
                <p>
                  <strong>Druh jídla</strong>
                </p>
                <div>
                  <Field type="radio" id="menu1" name="menu" value="svickova" />
                  <label htmlFor="menu1">Svíčková na smetaně</label>
                </div>
                <div>
                  <Field
                    type="radio"
                    id="menu2"
                    name="menu"
                    value="kureci prsicko"
                  />
                  <label htmlFor="menu2">Plněné kuřecí prsíčko</label>
                </div>
                <div style={{ marginTop: "0.5rem", fontSize: "0.75rem" }}>
                  <Field id="detskaPorce" type="checkbox" name="childPortion" />
                  <label htmlFor="detskaPorce">Dětská porce</label>
                </div>
                <ErrorMessage component={CustomErrorMsg} name="menu" />
              </div> */}

              <div>
                <p>
                  <strong>Ubytování</strong>
                </p>

                <Flex>
                  <div>
                    <Field
                      id="ubytovaniAno"
                      type="radio"
                      name="acommodation"
                      value="ano"
                    />
                    <label htmlFor="ubytovaniAno">Ano</label>
                  </div>
                  <div>
                    <Field
                      id="ubytovaniNe"
                      type="radio"
                      name="acommodation"
                      value="ne"
                    />
                    <label htmlFor="ubytovaniNe">Ne</label>
                  </div>
                </Flex>

                <ErrorMessage component={CustomErrorMsg} name="acommodation" />
              </div>

              <div>
                <button type="submit">
                  {persons === "1" || persons === currentStep.toString()
                    ? "Odeslat"
                    : "Další"}
                </button>
              </div>
            </Flex>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  )
}

export default FormStep
