import React, { useState, useEffect, useContext } from "react"
import * as S from "./Home.styled"
import heroImage1 from "../../images/hero_1.png"
import heroImage2 from "../../images/hero_2.png"
import heroImage3 from "../../images/hero_3.png"
import { preloadImages } from "../../utils"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import LogoAnimation from "../../components/LogoAnimation/LogoAnimation"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"
import * as Transitions from "../../theme/transitions"
import { IsInitializedContext } from "../../context"

const sliderImages = [heroImage1, heroImage2, heroImage3]

export default ({ transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)

  const [activeImage, setActiveImage] = useState(0)
  const [isLogoAnimationActive, setIsLogoAnimationActive] = useState(false)
  const [isLogoAnimationFinished, setIsLogoAnimationFinished] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // start logo animation when page transition is finished
  useEffect(() => {
    if (isInitialized) {
      const timeout = setTimeout(() => {
        setIsLogoAnimationActive(true)
      }, exit.length * 1000)
      return () => clearTimeout(timeout)
    }
  }, [isInitialized, exit.length])

  // set variable indicating that logo transition is finished
  useEffect(() => {
    if (!isInitialized) {
      return
    }
    const timeout = setTimeout(() => {
      setIsLogoAnimationFinished(true)
    }, 7 * Transitions.LOGO_TRANSITION_DURATION)
    return () => clearTimeout(timeout)
  }, [isInitialized, isLogoAnimationActive])

  // start slides animation when logo animation is finished
  useEffect(() => {
    if (!isLogoAnimationFinished) {
      return
    }
    const interval = setInterval(() => {
      setActiveImage(activeImage =>
        activeImage === sliderImages.length - 1 ? 0 : activeImage + 1
      )
    }, 500)
    return () => clearInterval(interval)
  }, [isLogoAnimationFinished])

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
            <LogoAnimation active={isLogoAnimationActive}>
              dobrze.
            </LogoAnimation>
          </S.Title>

          <S.Footer>
            <TransitionLink
              to={"/mission/pr"}
              exit={{ length: 0.5 }}
              entry={{
                length: 0,
                state: {
                  animation: PAGE_ANIMATION.SLIDE_TOP,
                },
              }}
            >
              PR
            </TransitionLink>
            &#8226;
            <TransitionLink
              to={"/mission/branding"}
              exit={{ length: 0.5 }}
              entry={{
                length: 0,
                state: {
                  animation: PAGE_ANIMATION.SLIDE_TOP,
                },
              }}
            >
              BRANDING
            </TransitionLink>
            &#8226;
            <TransitionLink
              to={"/mission/marketing"}
              exit={{ length: 0.5 }}
              entry={{
                length: 0,
                state: {
                  animation: PAGE_ANIMATION.SLIDE_TOP,
                },
              }}
            >
              MARKETING
            </TransitionLink>
          </S.Footer>
        </S.Content>

        <S.Slider>
          {!imagesLoaded && <S.ImagePlaceholder />}
          {imagesLoaded &&
            sliderImages.map((image, index) => (
              <S.Image
                key={image}
                active={index === activeImage}
                image={image}
              />
            ))}
        </S.Slider>
      </S.Container>
    </PageAnimation>
  )
}
