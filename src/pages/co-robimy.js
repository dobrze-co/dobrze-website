import React from "react"
import Mission from "../modules/mission/Mission"

export default ({ location, transitionStatus, exit, entry }) => (
  <Mission
    location={location}
    transitionStatus={transitionStatus}
    exit={exit}
    entry={entry}
  />
)
