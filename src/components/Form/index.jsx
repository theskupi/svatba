import * as React from "react"
import { FormWrapper } from "./style"

const Form = () => (
  <FormWrapper>
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
  </FormWrapper>
)

export default Form
