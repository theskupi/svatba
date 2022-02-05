import * as React from "react"
import { FormWrapper, HideFormFooter } from "./style"

const Form = () => (
  <FormWrapper>
    <iframe
      title="formular"
      id="formular"
      src="https://docs.google.com/forms/d/e/1FAIpQLSdw7c-q-1nUlXT6_tsRU64ZH9QlxgSNOhTicCb2F0-xG3Z7rw/viewform?embedded=true"
      width="640"
      height="1789"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Načítání…
    </iframe>
    <HideFormFooter />
  </FormWrapper>
)

export default Form
