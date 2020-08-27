import React from "react"
import Home from "../modules/home/Home"

export default ({ transitionStatus, exit, entry }) => (
  <Home transitionStatus={transitionStatus} exit={exit} entry={entry} />
)
