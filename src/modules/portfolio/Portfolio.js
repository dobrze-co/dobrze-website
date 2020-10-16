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
                Strategia marketingowa, lejek sprzedażowy, identyfikacja
                wizualna i reszta naszych działań to wynik dokładnej analizy
                danych, grup docelowych, trendów. Każde proponowane przez nas
                rozwiązanie z czegoś wynika. Dostarczamy kompletny audyt
                komunikacji wizualnej, językowej i udostępnionych przez Ciebie
                materiałów oraz analizę Twojej konkurencji. Dzięki temu dowiesz
                z czego wynikają zaprojektowane przez nas działania i zrozumiesz
                w jakich obszarach nasza pomoc jest niezbędna.
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

          <S.Section>
            <S.SectionText center>
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
                Projektując kampanie marketingowe przyglądamy się światowym
                trendom, docieramy do raportów największych agencji i studiujemy
                najnowsze badania rynku. Bierzemy pod uwagę lokalne i globalne
                trendy długoterminowe i zachowania poszczególnych grup
                konsumenckich. Projektowane przez nas działania są odpowiedzią
                na szybko zmieniającą się rzeczywistość.
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
            <S.SectionText center>
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
                finansowy. Czuwamy nad wdrażaniem nowych procesów, optymalizacją
                już istniejących, niezależnie od skali zmian. Możesz liczyć na
                naszą pomoc.
              </S.SectionParagraph>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={2400}
              >
                Jeśli chcesz żebyśmy zaprojektowały proces sprzedaży, strategię
                marketingową lub identyfikację wizualną dla Twojego biznesu,
                mówimy dobrze.
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
      </S.Container>
    </PageAnimation>
  )
}
