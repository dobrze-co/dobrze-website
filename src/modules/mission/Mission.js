import React, { useContext, useEffect, useState } from "react"
import * as S from "./Mission.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"
import missionsData from "../../data/missions.js"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"
import Navigation from "../../components/Navigation/Navigation"
import { IsInitializedContext } from "../../context"
import { INTRO_ANIMATION_DELAY } from "../../components/IntroAnimation/IntroAnimation.styled"

const navigationItems = missionsData.map(({ path, name }) => ({
  path: `/co-robimy/${path}`,
  label: name,
}))

export default ({ location, transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)
  const [isAnimationActive, setIsAnimationActive] = useState(false)

  useEffect(() => {
    if (isInitialized) {
      if (!entry.state.disableIntroAnimation) {
        const animationTimeout = setTimeout(() => {
          setIsAnimationActive(true)
        }, INTRO_ANIMATION_DELAY)

        return () => {
          clearTimeout(animationTimeout)
        }
      }

      requestAnimationFrame(() => {
        setIsAnimationActive(true)
      })
    }
  }, [isInitialized, entry.state.disableIntroAnimation])

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
            <S.ContentText isAnimationActive={isAnimationActive}>
              Każda marka może odnieść sukces, niezależnie od budżetu.
              Projektujemy procesy, które przynoszą wymierne korzyści.
            </S.ContentText>
            <S.ContentBackground />
          </S.Content>

          <S.Footer isAnimationActive={isAnimationActive}>
            <Navigation
              location={location}
              items={navigationItems}
              exitTransition={{ length: 0.8 }}
              entryTransition={{
                length: 0,
                state: {
                  animation: PAGE_ANIMATION.FADE,
                },
              }}
            />
          </S.Footer>
        </S.Container>
      </IntroAnimation>
    </PageAnimation>
  )
}
