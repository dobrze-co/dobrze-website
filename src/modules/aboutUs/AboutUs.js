import React, { useContext } from "react"
import * as S from "./AboutUs.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"
import aboutUsData from "../../data/aboutUs"
import { IsInitializedContext } from "../../context"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"
import heroImage1 from "../../images/hero_1.png"

export default ({ transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)

  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <IntroAnimation
        content="POZNAJ NAS"
        started={isInitialized}
        active={!entry.state.disableIntroAnimation}
      >
        <S.Container>
          <S.Content>
            <S.ContentImage image={heroImage1} />

            <S.ContentText>
              <S.ContentParagraph>
                Stworzyłyśmy <strong>dobrze. </strong> bo wiemy jak trudno jest
                coś zmienić. W wielu firmach są obszary, których zwyczajnie się
                nie dotyka. Nie dlatego, że są tak dobre. Dlatego, że wymagają
                zmian, których z natury się boimy. To, czego boisz się dotknąć,
                prędzej czy później urośnie do rangi problemu, którego nie
                sposób ignorować. Branding, marketing i sprzedaż to obszary
                naszego działania.
              </S.ContentParagraph>
              <S.ContentParagraph>
                Misja od początku była dla nas jasna - chcemy pomagać, tam gdzie
                inni mówią, że bez milionowych nakładów finansowych się nie da.
                Chcemy oswajać ze zmianami i zachęcać do ich wprowadzania.
                <strong>
                  {" "}
                  Każda marka ma szansę być dobra, niezależnie od budżetu.{" "}
                </strong>
                Chcemy pomagać budować szczere i długotrwałe relacje z
                klientami, tworzyć piękne kampanie i spójne przekazy.
              </S.ContentParagraph>
            </S.ContentText>
            <S.ContentBackground />
          </S.Content>

          <S.Navigation>
            <TransitionLink
              to={`/o-nas/${aboutUsData[0].path}`}
              exit={{ length: 0.5 }}
              entry={{
                length: 0,
                state: {
                  animation: PAGE_ANIMATION.SLIDE_TOP,
                },
              }}
            >
              <S.NavigationItem>
                <S.NavigationPhoto image={aboutUsData[0].photo} />
                <S.NavigationText left>ADA</S.NavigationText>
              </S.NavigationItem>
            </TransitionLink>

            <S.NavigationSeparator>&#8226;</S.NavigationSeparator>

            <TransitionLink
              to={`/o-nas/${aboutUsData[1].path}`}
              exit={{ length: 0.5 }}
              entry={{
                length: 0,
                state: {
                  animation: PAGE_ANIMATION.SLIDE_TOP,
                },
              }}
            >
              <S.NavigationItem>
                <S.NavigationPhoto image={aboutUsData[1].photo} />
                <S.NavigationText right>ASIA</S.NavigationText>
              </S.NavigationItem>
            </TransitionLink>
          </S.Navigation>
        </S.Container>
      </IntroAnimation>
    </PageAnimation>
  )
}
