import React, { Fragment } from "react"
import * as S from "./MissionDetails.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import Navigation from "../../components/Navigation/Navigation"
import Arrow from "../../components/Arrow/Arrow"
import missionsData from "../../data/missions.js"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"

const navigationItems = missionsData.map(({ path, name }) => ({
  path: `/mission/${path}`,
  label: name,
}))

export default ({ location, transitionStatus, exit, entry }) => {
  const missionData = missionsData.find(mission =>
    location.pathname.includes(`/mission/${mission.path}`)
  )

  const renderParagraph = paragraph => {
    return paragraph
      .split(/(<a href='\/.*?'>.*?<\/a>)/g)
      .map((element, index) => {
        if (/(<a href='\/.*?'>.*?<\/a>)/.test(element)) {
          const href = element.match(/href='(.*?)'/)[1]
          const content = element.match(/<a href='.*?'>(.*?)<\/a>/)[1]

          return (
            <Fragment key={index}>
              {" "}
              <TransitionLink
                to={href}
                exit={{ length: 0.5 }}
                entry={{
                  length: 0,
                  state: {
                    animation: PAGE_ANIMATION.SLIDE_TOP,
                  },
                }}
              >
                {content}
              </TransitionLink>
            </Fragment>
          )
        }

        return <Fragment key={index}>{element}</Fragment>
      })
  }

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
              <S.Paragraph key={index}>
                {renderParagraph(paragraph)}
              </S.Paragraph>
            ))}
          </S.Paragraphs>
        </S.Content>
      </S.Container>
    </PageAnimation>
  )
}
