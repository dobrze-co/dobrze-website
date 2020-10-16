import React, { useContext, useEffect, useState } from "react"
import * as S from "./AboutUs.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import aboutUsData from "../../data/aboutUs"
import { IsInitializedContext } from "../../context"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"
import aboutUsImage from "../../images/aboutUs.jpg"
import { preloadImages } from "../../utils"

export default ({ transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)
  const [isAnimationActive, setIsAnimationActive] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    preloadImages([
      aboutUsImage,
      aboutUsData[0].photo,
      aboutUsData[1].photo,
    ]).then(() => {
      setImagesLoaded(true)
    })
  }, [])

  useEffect(() => {
    if (isInitialized && imagesLoaded) {
      requestAnimationFrame(() => {
        setIsAnimationActive(true)
      })
    }
  }, [isInitialized, imagesLoaded, entry.state.disableIntroAnimation])

  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <S.Container>
        <S.Content>
          <S.ContentImageContainer>
            <S.ContentImageWrapper>
              <S.ContentImage
                image={aboutUsImage}
                isAnimationActive={isAnimationActive}
              />
            </S.ContentImageWrapper>
          </S.ContentImageContainer>

          <S.ContentText>
            <S.ContentParagraph
              isAnimationActive={isAnimationActive}
              animationDelay={0}
            >
              Stworzyłyśmy <strong>dobrze.</strong> bo wiemy jak trudno jest coś
              zmienić. W wielu firmach są obszary, których zwyczajnie się nie
              dotyka. Nie dlatego, że są tak dobre. Dlatego, że wymagają zmian,
              których z natury się boimy. Branding, marketing i sprzedaż - tym
              się zajmujemy. Zaplanujemy dla Ciebie skuteczne działania
              marketingowe, zaprojektujemy procesy sprzedaży, które przyniosą
              wymierne korzyści i stworzymy spójną identyfikację wizualną i
              językową Twojej marki.
            </S.ContentParagraph>
            <S.ContentParagraph
              isAnimationActive={isAnimationActive}
              animationDelay={150}
            >
              Misja od początku była dla nas jasna - chcemy pomagać, tam gdzie
              inni mówią, że bez milionowych nakładów finansowych się nie da.{" "}
              <strong>
                Każda marka ma szansę być dobra, niezależnie od budżetu.
              </strong>{" "}
              Wszystkie nasze działania są wynikiem analizy. Nie projektujemy
              zdając się na intuicję, projektujemy kierując się wiedzą.
            </S.ContentParagraph>
          </S.ContentText>
          <S.ContentBackground isAnimationActive={isAnimationActive} />
        </S.Content>

        <S.Navigation>
          <TransitionLink
            to={`/o-nas/${aboutUsData[0].path}`}
            exit={{ length: 0.8 }}
            entry={{
              length: 0,
              state: {
                animation: PAGE_ANIMATION.FADE,
              },
            }}
          >
            <S.NavigationItem
              isAnimationActive={isAnimationActive}
              animationDelay={500}
              left
            >
              <S.NavigationPhoto image={aboutUsData[0].photo} />
              <S.NavigationText left>ADA</S.NavigationText>
            </S.NavigationItem>
          </TransitionLink>

          <S.NavigationSeparator
            isAnimationActive={isAnimationActive}
            animationDelay={500}
          >
            &#8226;
          </S.NavigationSeparator>

          <TransitionLink
            to={`/o-nas/${aboutUsData[1].path}`}
            exit={{ length: 0.8 }}
            entry={{
              length: 0,
              state: {
                animation: PAGE_ANIMATION.FADE,
              },
            }}
          >
            <S.NavigationItem
              isAnimationActive={isAnimationActive}
              animationDelay={500}
              right
            >
              <S.NavigationPhoto image={aboutUsData[1].photo} />
              <S.NavigationText right>ASIA</S.NavigationText>
            </S.NavigationItem>
          </TransitionLink>
        </S.Navigation>
      </S.Container>
    </PageAnimation>
  )
}
