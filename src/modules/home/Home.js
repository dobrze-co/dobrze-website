import React, { useState, useEffect, useContext } from "react"
import * as S from "./Home.styled"
import heroImage0 from "../../images/hero_0.jpg"
import heroImage1 from "../../images/hero_1.jpg"
import heroImage2 from "../../images/hero_2.jpg"
import heroImage3 from "../../images/hero_3.jpg"
import heroImage4 from "../../images/hero_4.jpg"
import heroImage5 from "../../images/hero_5.jpg"
import { preloadImages } from "../../utils"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import LogoAnimation from "../../components/LogoAnimation/LogoAnimation"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"
import * as Transitions from "../../theme/transitions"
import { IsInitializedContext } from "../../context"

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

  // start animation after page transition and when images are fetched
  useEffect(() => {
    if (isPageAnimationFinished && imagesLoaded) {
      setIsAnimationActive(true)
    }
  }, [isPageAnimationFinished, imagesLoaded])

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

  // start slides animation when logo animation is finished
  useEffect(() => {
    if (!isAnimationFinished) {
      return
    }
    const interval = setInterval(() => {
      setActiveImage(activeImage =>
        activeImage === sliderImages.length - 1 ? 0 : activeImage + 1
      )
    }, 500)
    return () => clearInterval(interval)
  }, [isAnimationFinished])

  useEffect(() => {
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
      <S.Container>
        <S.Content>
          <S.Title>
            <LogoAnimation isAnimationActive={isAnimationActive}>
              dobrze.
            </LogoAnimation>
          </S.Title>
          <S.Footer>
            <S.FooterContainer isAnimationActive={isAnimationActive}>
              <TransitionLink
                to={"/co-robimy/branding"}
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
                to={"/co-robimy/marketing"}
                exit={{ length: 0.8 }}
                entry={{
                  length: 0,
                  state: {
                    animation: PAGE_ANIMATION.FADE,
                  },
                }}
              >
                MARKETING
              </TransitionLink>
              &nbsp;&#8226;&nbsp;
              <TransitionLink
                to={"/co-robimy/sprzedaz"}
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
