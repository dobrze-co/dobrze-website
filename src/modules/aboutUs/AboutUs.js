import React from "react"
import * as S from "./AboutUs.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"
import aboutUsData from "../../data/aboutUs"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"
import heroImage1 from "../../images/hero_1.png"

export default ({ transitionStatus, exit, entry }) => {
  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <IntroAnimation
        content="POZNAJ NAS"
        active={!entry.state.disableIntroAnimation}
      >
        <S.Container>
          <S.Content>
            <S.ContentImage image={heroImage1} />

            <S.ContentText>
              <S.ContentParagraph>
                Wymyśliłyśmy dobrze. po jednej z wielu konferencji dotyczących
                projektowania biznesu. Już wtedy miałyśmy na koncie całkiem
                sporo doświadczeń i sukcesów - tych osiągniętych wspólnie
                (pracujemy razem od 3 lat) i osobno (każda z nas realizuje się
                we własnych projektach, o których możesz przeczytać poniżej).
              </S.ContentParagraph>
              <S.ContentParagraph>
                Misja od początku była jasna - chcemy pomagać, tam gdzie inni
                mówią, że bez milionowych nakładów finansowych się nie da. Każda
                marka ma szansę być dobra, niezależnie od budżetu. Każdy biznes
                ma szansę zaistnieć w świadomości klientów, każdy biznes ma
                szanse zarabiać i funkcjonować dobrze, opierając się na
                przemyślanym i spójnym procesie. Chcemy zmieniać i udowadniać,
                że małe zmiany przynoszą duże korzyści. dobrze. to świadome,
                proekologiczne, etyczne rozwiązania. Chcemy, żeby świat biznesu
                był zwyczajnie dobry, tak jak ludzie, którzy go tworzą.
              </S.ContentParagraph>
            </S.ContentText>
            <S.ContentBackground />
          </S.Content>

          <S.Navigation>
            <TransitionLink
              to={`/aboutUs/${aboutUsData[0].path}`}
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
              to={`/aboutUs/${aboutUsData[1].path}`}
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
