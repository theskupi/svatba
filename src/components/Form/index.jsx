import React, { useState } from "react"
import FormStep from "./FormStep"
import { FormContainer, Stepper } from "./style"

const Form = () => {
  const [personCounter, setPersonCounter] = useState(null)
  const [currentStep, setCurrentStep] = useState(1)

  const handleChange = e => {
    console.log(e.target)
    setPersonCounter(e.target.value)
  }
  return (
    <FormContainer>
      <h3>Svatební formulář</h3>
      {personCounter !== (currentStep - 1).toString() ? (
        <>
          <p>
            Prosím zvolte, kolik vás přijde a postupně vyplňte informace za
            každého hosta.
          </p>
          <select
            value={personCounter}
            onChange={handleChange}
            name="personCounter"
          >
            <option value="" selected disabled hidden>
              Počet hostů
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>

          {personCounter > 1 && (
            // @ts-ignore
            <Stepper stepWidth={`${(currentStep / personCounter) * 100}%`} />
          )}

          {personCounter && (
            <FormStep
              persons={personCounter}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
        </>
      ) : (
        <p>Děkujeme za vaše odpovědi 🙂</p>
      )}
    </FormContainer>
  )
}

export default Form
