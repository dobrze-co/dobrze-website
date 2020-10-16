import React, { Fragment, useContext, useEffect, useState } from "react"
import * as S from "./MissionDetails.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import Navigation from "../../components/Navigation/Navigation"
import Arrow from "../../components/Arrow/Arrow"
import missionsData from "../../data/missions.js"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"
import { IsInitializedContext } from "../../context"

const navigationItems = missionsData.map(({ path, name }) => ({
  path: `/co-robimy/${path}`,
  label: name,
}))

export default ({ location, transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)
  const [isAnimationActive, setIsAnimationActive] = useState(false)

  const missionData = missionsData.find(mission =>
    location.pathname.includes(`/co-robimy/${mission.path}`)
  )

  useEffect(() => {
    if (isInitialized) {
      const timeout = setTimeout(() => {
        setIsAnimationActive(true)
      }, exit.length * 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [isInitialized, exit.length])

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
                exit={{ length: 0.8 }}
                entry={{
                  length: 0,
                  state: {
                    animation: PAGE_ANIMATION.FADE,
                  },
                }}
              >
                {content}
              </TransitionLink>
            </Fragment>
          )
        }

        return (
          <span dangerouslySetInnerHTML={{ __html: element }} key={index} />
        )
      })
  }

  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <S.Container>
        <S.MobileBackButton
          isAnimationActive={isAnimationActive}
          animationDelay={missionData.paragraphs.length * 150}
        >
          <TransitionLink
            to="/co-robimy"
            exit={{ length: 0.8 }}
            entry={{
              length: 0,
              state: {
                animation: PAGE_ANIMATION.FADE,
                disableIntroAnimation: true,
              },
            }}
          >
            <Arrow direction="left" small />
            <S.MobileBackButtonText>POWRÓT</S.MobileBackButtonText>
          </TransitionLink>
        </S.MobileBackButton>

        <S.DesktopBackButton
          isAnimationActive={isAnimationActive}
          animationDelay={missionData.paragraphs.length * 150}
        >
          <TransitionLink
            to="/co-robimy"
            exit={{ length: 0.8 }}
            entry={{
              length: 0,
              state: {
                animation: PAGE_ANIMATION.FADE,
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
            <S.Title isAnimationActive={isAnimationActive}>
              {missionData.name}
            </S.Title>
            <S.TitleBackground isAnimationActive={isAnimationActive} />
          </S.TitleContainer>

          <S.Paragraphs>
            {missionData.paragraphs.map((paragraph, index) => (
              <S.Paragraph
                key={index}
                isAnimationActive={isAnimationActive}
                animationDelay={index * 150}
              >
                {renderParagraph(paragraph)}
              </S.Paragraph>
            ))}
          </S.Paragraphs>
        </S.Content>
      </S.Container>
    </PageAnimation>
  )
}
