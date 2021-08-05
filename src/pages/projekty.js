import React from "react"
import Portfolio from "../modules/portfolio/Portfolio"

export default ({ transitionStatus, exit, entry }) => (
  <Portfolio transitionStatus={transitionStatus} exit={exit} entry={entry} />
)
