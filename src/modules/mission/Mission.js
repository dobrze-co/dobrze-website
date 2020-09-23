import React, { useContext } from "react"
import * as S from "./Mission.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"
import TransitionLink from "gatsby-plugin-transition-link"
import missionsData from "../../data/missions.js"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"
import Arrow from "../../components/Arrow/Arrow"
import Navigation from "../../components/Navigation/Navigation"
import { IsInitializedContext } from "../../context"

const navigationItems = missionsData.map(({ path, name }) => ({
  path: `/co-robimy/${path}`,
  label: name,
}))

export default ({ location, transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)

  const renderIntroContent = () => (
    <S.IntroContent>
      CZYM JEST <br /> <S.IntroLogo>dobrze.</S.IntroLogo>
    </S.IntroContent>
  )

  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <IntroAnimation
        content={renderIntroContent()}
        started={isInitialized}
        active={!entry.state.disableIntroAnimation}
      >
        <S.Container>
          <S.Content>
            <S.ContentText>
              Każda marka może być dobra, niezależnie od budżetu. Projektujemy
              zmiany, które przynoszą wymierne korzyści.
            </S.ContentText>
            <S.ContentBackground />
          </S.Content>

          <S.Footer>
            <Navigation
              location={location}
              items={navigationItems}
              exitTransition={{ length: 0.5 }}
              entryTransition={{
                length: 0,
                state: {
                  animation: PAGE_ANIMATION.SLIDE_TOP,
                },
              }}
            />
          </S.Footer>

          <TransitionLink
            to={`/co-robimy/${missionsData[0].path}`}
            exit={{ length: 0.5 }}
            entry={{
              length: 0,
              state: {
                animation: PAGE_ANIMATION.SLIDE_TOP,
              },
            }}
          >
            <S.ArrowContainer>
              <Arrow direction="bottom" />
            </S.ArrowContainer>
          </TransitionLink>
        </S.Container>
      </IntroAnimation>
    </PageAnimation>
  )
}
