import React from "react"
import * as S from "./AboutUsDetails.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"

import aboutUsData from "../../data/aboutUs.js"

export default ({ location, transitionStatus, exit, entry }) => {
  const aboutUsItem = aboutUsData.find(
    aboutUs => location.pathname === `/aboutUs/${aboutUs.path}`
  )

  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <S.Container>{aboutUsItem.name}</S.Container>
    </PageAnimation>
  )
}
