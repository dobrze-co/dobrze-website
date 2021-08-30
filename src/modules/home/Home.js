import React, { useState, useEffect, useContext } from "react"
import * as S from "./Home.styled"
import heroImage0 from "../../images/hero_0.jpg"
import heroImage1 from "../../images/hero_1.jpg"
import heroImage2 from "../../images/hero_2.jpg"
import heroImage3 from "../../images/hero_3.jpg"
import heroImage4 from "../../images/hero_4.jpg"
import heroImage5 from "../../images/hero_5.jpg"
import { preloadImage, preloadImages } from "../../utils"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import LogoAnimation from "../../components/LogoAnimation/LogoAnimation"
import Dot from "../../components/Dot/Dot"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"
import * as Transitions from "../../theme/transitions"
import { IsInitializedContext } from "../../context"
import { Helmet } from "react-helmet"

const sliderImages = [
  heroImage0,
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
]

export default ({ transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)

  const [activeImage, setActiveImage] = useState(0)
  const [isAnimationActive, setIsAnimationActive] = useState(false)
  const [isAnimationFinished, setIsAnimationFinished] = useState(false)
  const [isPageAnimationFinished, setIsPageAnimationFinished] = useState(false)
  const [heroImageLoaded, setHeroImageLoaded] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // wait until page transition is finished
  useEffect(() => {
    if (isInitialized) {
      const timeout = setTimeout(() => {
        setIsPageAnimationFinished(true)
      }, exit.length * 1000)
      return () => clearTimeout(timeout)
    }
  }, [isInitialized, exit.length])

  // start animation after page transition and when first image is fetched
  useEffect(() => {
    if (isPageAnimationFinished && heroImageLoaded) {
      setIsAnimationActive(true)
    }
  }, [isPageAnimationFinished, heroImageLoaded])

  // set variable indicating that logo transition is finished
  useEffect(() => {
    if (!isAnimationActive) {
      return
    }
    const timeout = setTimeout(() => {
      setIsAnimationFinished(true)
    }, Transitions.HOME_TRANSITION_DURATION)
    return () => clearTimeout(timeout)
  }, [isAnimationActive])

  // start slides animation when logo animation is finished and all images are loaded
  useEffect(() => {
    if (!isAnimationFinished || !imagesLoaded) {
      return
    }
    const interval = setInterval(() => {
      setActiveImage(activeImage =>
        activeImage === sliderImages.length - 1 ? 0 : activeImage + 1
      )
    }, 2000)
    return () => clearInterval(interval)
  }, [isAnimationFinished, imagesLoaded])

  useEffect(() => {
    preloadImage(sliderImages[0]).then(() => {
      setHeroImageLoaded(true)
    })
    preloadImages(sliderImages).then(() => {
      setImagesLoaded(true)
    })
  }, [])

  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <Helmet titleTemplate="" title="dobrze." />

      <S.Container>
        <S.Content>
          <S.Title>
            <LogoAnimation isAnimationActive={isAnimationActive}>
              dobrze
              <Dot />
            </LogoAnimation>
          </S.Title>
          <S.Footer>
            <S.FooterContainer isAnimationActive={isAnimationActive}>
              <TransitionLink
                to={"/co-robimy?activeTab=branding"}
                exit={{ length: 0.8 }}
                entry={{
                  length: 0,
                  state: {
                    animation: PAGE_ANIMATION.FADE,
                  },
                }}
              >
                BRANDING
              </TransitionLink>
              &nbsp;&#8226;&nbsp;
              <TransitionLink
                to={"/co-robimy?activeTab=analiza"}
                exit={{ length: 0.8 }}
                entry={{
                  length: 0,
                  state: {
                    animation: PAGE_ANIMATION.FADE,
                  },
                }}
              >
                ANALIZA
              </TransitionLink>
              &nbsp;&#8226;&nbsp;
              <TransitionLink
                to={"/co-robimy?activeTab=sprzedaz"}
                exit={{ length: 0.8 }}
                entry={{
                  length: 0,
                  state: {
                    animation: PAGE_ANIMATION.FADE,
                  },
                }}
              >
                SPRZEDAŻ
              </TransitionLink>
            </S.FooterContainer>
          </S.Footer>
        </S.Content>

        <S.Slider isAnimationActive={isAnimationActive}>
          {sliderImages.map((image, index) => (
            <S.Image key={image} active={index === activeImage} image={image} />
          ))}
        </S.Slider>
      </S.Container>
    </PageAnimation>
  )
}
