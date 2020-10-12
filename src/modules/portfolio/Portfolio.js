import React, { useContext, useEffect, useState } from "react"
import * as S from "./Portfolio.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import portfolioImage1 from "../../images/portfolio_1.jpg"
import portfolioImage2 from "../../images/portfolio_2.jpg"
import portfolioImage3 from "../../images/portfolio_3.jpg"
import { IsInitializedContext } from "../../context"
import { preloadImages } from "../../utils"

const portfolioImages = [portfolioImage1, portfolioImage2, [portfolioImage3]]

export default ({ transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)
  const [isAnimationActive, setIsAnimationActive] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    if (isInitialized && imagesLoaded) {
      requestAnimationFrame(() => {
        setIsAnimationActive(true)
      })
    }
  }, [isInitialized, imagesLoaded])

  useEffect(() => {
    preloadImages(portfolioImages).then(() => {
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
        <S.HeaderContainer>
          <S.Header isAnimationActive={isAnimationActive}>
            JAK PRACUJEMY
          </S.Header>
          <S.HeaderBackground isAnimationActive={isAnimationActive} />
        </S.HeaderContainer>

        <S.Sections>
          <S.Section reversed>
            <S.SectionText center>
              <S.SectionTitle
                isAnimationActive={isAnimationActive}
                animationDelay={0}
              >
                ANALIZA
              </S.SectionTitle>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={200}
              >
                Wszystkie nasze działania projektujemy <strong>po</strong>{" "}
                wykonaniu analizy danych, grup docelowych, trendów. Każde
                proponowane przez nas rozwiązanie z czegoś wynika. Katalog zmian
                zawiera pełen audyt komunikacji wizualnej, językowej i
                udostępnionych przez Ciebie materiałów oraz analizę Twojej
                konkurencji. Dzięki temu dowiesz z czego wynikają zaprojektowane
                przez nas działania i zrozumiesz w jakich obszarach zmiana jest
                niezbędna.
              </S.SectionParagraph>
            </S.SectionText>
            <S.SectionImageWrapper>
              <S.SectionImage
                isAnimationActive={isAnimationActive}
                animationDelay={200}
                src={portfolioImage1}
              />
            </S.SectionImageWrapper>
          </S.Section>

          <S.Section withOffset>
            <S.SectionText bottom>
              <S.SectionTitle
                isAnimationActive={isAnimationActive}
                animationDelay={1000}
              >
                TRENDY
              </S.SectionTitle>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={1200}
              >
                Projektując zmianę przyglądamy się światowym trendom, docieramy
                do raportów największych agencji i studiujemy najnowsze badania
                rynku. Bierzemy pod uwagę lokalne i globalne trendy
                długoterminowe i zachowania poszczególnych grup konsumenckich.
                Projektowane przez nas zmiany są odpowiedzią na szybko
                zmieniającą się rzeczywistość.
              </S.SectionParagraph>
            </S.SectionText>
            <S.SectionImageWrapper>
              <S.SectionImage
                isAnimationActive={isAnimationActive}
                animationDelay={1200}
                src={portfolioImage2}
                wide
              />
            </S.SectionImageWrapper>
          </S.Section>

          <S.Section reversed>
            <S.SectionText top>
              <S.SectionTitle
                isAnimationActive={isAnimationActive}
                animationDelay={2000}
              >
                KATALOG ZMIAN
              </S.SectionTitle>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={2200}
              >
                Katalog zmian to 3 częściowy przewodnik po zaprojektowanych dla
                Ciebie działaniach. Jego pierwsza część zawiera analizę. Zawsze
                możesz do niej wrócić, jeśli, któreś z działań wyda Ci się
                niejasne. Druga część poświęcona trendom pomoże Ci samodzielnie
                kreować kolejne kampanie marketingowe. Nie chcemy uzależniać
                Ciebie od naszej pomocy, zależy nam na Twojej samodzielności w
                świecie marketingu. Ostatnia część to proponowane przez nas
                zmiany w 3 wariantach. Każda z nich zakłada inny nakład
                finansowy. Czuwamy nad całym procesem wdrażania każdej ze zmian,
                niezależnie od jej wielkości. Możesz liczyć na naszą pomoc.
              </S.SectionParagraph>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={2400}
              >
                Jeśli chcesz żebyśmy zaprojektowały zmianę dla Twojego biznesu,
                mówimy <strong>dobrze.</strong>
              </S.SectionParagraph>
            </S.SectionText>
            <S.SectionImageWrapper>
              <S.SectionImage
                isAnimationActive={isAnimationActive}
                animationDelay={2200}
                src={portfolioImage3}
                wide
              />
            </S.SectionImageWrapper>
          </S.Section>
        </S.Sections>

        <S.Footer isAnimationActive={isAnimationActive} animationDelay={3000}>
          <S.Logo>
            <S.LogoBackground />
            <S.LogoLetters>
              <S.LogoLetter>d</S.LogoLetter>
              <S.LogoDot>.</S.LogoDot>
            </S.LogoLetters>
          </S.Logo>
        </S.Footer>
      </S.Container>
    </PageAnimation>
  )
}
