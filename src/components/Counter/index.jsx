import React from "react"
import { CounterWrapper } from "./style"

const Counter = () => {
  const countDownDate = new Date("Aug 13, 2022 11:00:00").getTime()
  const now = new Date().getTime()
  const distance = countDownDate - now
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))

  return <CounterWrapper>{days}</CounterWrapper>
}

export default Counter
