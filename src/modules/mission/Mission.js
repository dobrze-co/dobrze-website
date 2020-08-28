import React from "react"
import * as S from "./Mission.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"
import TransitionLink from "gatsby-plugin-transition-link"
import missionsData from "../../data/missions.js"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"
import Arrow from "../../components/Arrow/Arrow"
import Navigation from "../../components/Navigation/Navigation"

const navigationItems = missionsData.map(({ path, name }) => ({
  path: `/mission/${path}`,
  label: name,
}))

export default ({ location, transitionStatus, exit, entry }) => {
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
        active={!entry.state.disableIntroAnimation}
      >
        <S.Container>
          <S.Content>
            <S.ContentText>
              We transform brands, grow businesses tell stories that deepen
              engagement
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
            to={`/mission/${missionsData[0].path}`}
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
