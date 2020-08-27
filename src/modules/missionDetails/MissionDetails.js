import React from "react"
import * as S from "./MissionDetails.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import Navigation from "../../components/Navigation/Navigation"
import Arrow from "../../components/Arrow/Arrow"
import missionsData from "../../../data/missions.json"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"

const navigationItems = missionsData.map(({ path, name }) => ({
  path: `/mission/${path}`,
  label: name,
}))

export default ({ location, transitionStatus, exit, entry }) => {
  const missionData = missionsData.find(
    mission => location.pathname === `/mission/${mission.path}`
  )

  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <S.Container>
        <S.MobileBackButton>
          <TransitionLink
            to="/mission"
            exit={{ length: 0.5 }}
            entry={{
              length: 0,
              state: {
                animation: PAGE_ANIMATION.SLIDE_RIGHT,
                disableIntroAnimation: true,
              },
            }}
          >
            <Arrow direction="left" small />
            <S.MobileBackButtonText>POWRÓT</S.MobileBackButtonText>
          </TransitionLink>
        </S.MobileBackButton>

        <S.DesktopBackButton>
          <TransitionLink
            to="/mission"
            exit={{ length: 0.5 }}
            entry={{
              length: 0,
              state: {
                animation: PAGE_ANIMATION.SLIDE_RIGHT,
                disableIntroAnimation: true,
              },
            }}
          >
            <Arrow direction="left" />
          </TransitionLink>
        </S.DesktopBackButton>

        <S.NavigationContainer>
          <Navigation
            location={location}
            items={navigationItems}
            exitTransition={{ length: 0 }}
            entryTransition={{ length: 0 }}
          />
        </S.NavigationContainer>

        <S.Content>
          <S.TitleContainer>
            <S.Title>{missionData.name}</S.Title>
          </S.TitleContainer>

          <S.Paragraphs>
            {missionData.paragraphs.map((paragraph, index) => (
              <S.Paragraph key={index}>{paragraph}</S.Paragraph>
            ))}
          </S.Paragraphs>
        </S.Content>
      </S.Container>
    </PageAnimation>
  )
}
