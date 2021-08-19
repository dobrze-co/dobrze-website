import React, { useContext } from "react"
import * as S from "./Portfolio.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"
import { IsInitializedContext } from "../../context"
import { Helmet } from "react-helmet"

export default ({ transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)

  const renderIntroContent = () => (
    <S.IntroContent>PRACUJEMY NAD NASZYM PORTFOLIO</S.IntroContent>
  )

  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <Helmet title="Co robimy" />

      <IntroAnimation
        infinite
        withDot
        content={renderIntroContent()}
        started={isInitialized}
        active={!entry.state.disableIntroAnimation}
      />
    </PageAnimation>
  )
}
