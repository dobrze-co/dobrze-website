import React, { useState, useEffect } from "react"
import * as S from "./Home.styled"
import heroImage1 from "../../images/hero_1.png"
import heroImage2 from "../../images/hero_2.png"
import heroImage3 from "../../images/hero_3.png"
import { preloadImages } from "../../utils"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"

const sliderImages = [heroImage1, heroImage2, heroImage3]

export default ({ transitionStatus, exit, entry }) => {
  const [activeImage, setActiveImage] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(activeImage =>
        activeImage === sliderImages.length - 1 ? 0 : activeImage + 1
      )
    }, 500)
    return () => clearInterval(interval)
  }, [sliderImages])

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
          <S.Title>dobrze.</S.Title>

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
