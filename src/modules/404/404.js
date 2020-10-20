import React from "react"
import { Link } from "gatsby"
import * as S from "./404.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import { Helmet } from "react-helmet"

export default ({ transitionStatus, exit, entry }) => {
  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <Helmet title="404" />

      <S.Container>
        <S.Over>UPS!</S.Over>

        <S.Title>404</S.Title>

        <Link to={`/`}>
          <S.Footer>WRÓĆ DO </S.Footer>
          <S.FooterLogo>dobrze.</S.FooterLogo>
        </Link>
      </S.Container>
    </PageAnimation>
  )
}
