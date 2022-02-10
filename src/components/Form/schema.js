import * as yup from "yup"

export const Schema = yup
  .object({
    userName: yup.string().required(`Vyplňtě prosím jméno`),
    menu: yup.string().required(`Zvolte prosím jedno z jídel`),
    childPortion: yup.boolean(),
    acommodation: yup.string().required(`Zvolte prosím, jestli přenocujete`),
  })
  .required()
