import React from "react"

const Counter = () => {
  const countDownDate = new Date("Aug 13, 2022 11:00:00").getTime()
  const now = new Date().getTime()
  const distance = countDownDate - now
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))

  return <p>Do svatby zbývá {days} dnů</p>
}

export default Counter
