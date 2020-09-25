import React, { Fragment, useContext, useEffect, useState } from "react"
import * as S from "./AboutUsDetails.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import aboutUsData from "../../data/aboutUs.js"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"
import Arrow from "../../components/Arrow/Arrow"
import { IsInitializedContext } from "../../context"
import { preloadImages } from "../../utils"

export default ({ location, transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)
  const [isAnimationActive, setIsAnimationActive] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const aboutUsItem = aboutUsData.find(aboutUs =>
    location.pathname.includes(`/o-nas/${aboutUs.path}`)
  )

  useEffect(() => {
    preloadImages([aboutUsItem.photo]).then(() => {
      setImagesLoaded(true)
    })
  }, [aboutUsItem.photo])

  useEffect(() => {
    if (isInitialized && imagesLoaded) {
      requestAnimationFrame(() => {
        setIsAnimationActive(true)
      })
    }
  }, [isInitialized, imagesLoaded])

  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <S.Container>
        <S.MobileBackButton
          isAnimationActive={isAnimationActive}
          animationDelay={(aboutUsItem.paragraphs.length + 1) * 150}
        >
          <TransitionLink
            to="/o-nas"
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
          animationDelay={(aboutUsItem.paragraphs.length + 1) * 150}
        >
          <TransitionLink
            to="/o-nas"
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

        <S.Content>
          <S.ContentBackground isAnimationActive={isAnimationActive} />

          <S.ContentMobileTitle isAnimationActive={isAnimationActive}>
            {aboutUsItem.name}
          </S.ContentMobileTitle>

          <S.ContentPhotoWrapper>
            <S.ContentPhoto
              image={aboutUsItem.photo}
              isAnimationActive={isAnimationActive}
            />
          </S.ContentPhotoWrapper>

          <S.ContentTextWrapper>
            <S.ContentDesktopTitle isAnimationActive={isAnimationActive}>
              {aboutUsItem.name}
            </S.ContentDesktopTitle>

            <S.ContentText>
              {aboutUsItem.paragraphs.map((paragraph, index) => (
                <S.ContentTextParagraph
                  key={index}
                  isAnimationActive={isAnimationActive}
                  animationDelay={index * 150}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </S.ContentText>
          </S.ContentTextWrapper>
        </S.Content>

        <S.Features
          isAnimationActive={isAnimationActive}
          animationDelay={aboutUsItem.paragraphs.length * 150}
        >
          {aboutUsItem.skills.map((skill, index) => {
            return (
              <Fragment key={index}>
                <S.Feature>{skill}</S.Feature>
                {index < aboutUsItem.skills.length - 1 && (
                  <S.Separator>&#8226;</S.Separator>
                )}
              </Fragment>
            )
          })}
        </S.Features>
      </S.Container>
    </PageAnimation>
  )
}
