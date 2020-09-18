import React from "react"
import NotFound from "../modules/404/404"

export default ({ transitionStatus, exit, entry }) => (
  <NotFound transitionStatus={transitionStatus} exit={exit} entry={entry} />
)
