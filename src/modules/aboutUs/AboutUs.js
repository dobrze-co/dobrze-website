import React, { useContext, useEffect, useState } from "react"
import * as S from "./AboutUs.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import PageContent from "../../components/PageContent/PageContent"
import Button from "../../components/Button/Button"
import Media from "../../components/Media/Media"
import { IsInitializedContext } from "../../context"
import aboutUsImage from "../../images/aboutUs.jpg"
import adaImage from "../../images/ada.jpg"
import asiaImage from "../../images/asia.jpg"
import { preloadImages } from "../../utils"
import { Helmet } from "react-helmet"

export default ({ transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)
  const [isAnimationActive, setIsAnimationActive] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    preloadImages([aboutUsImage, adaImage, asiaImage]).then(() => {
      setImagesLoaded(true)
    })
  }, [])

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
      <Helmet title="O nas" />

      <PageContent>
        <S.Section>
          <S.SectionLeftColumn hideOnMobile>
            <S.SectionImage
              isAnimationActive={isAnimationActive}
              animationDelay={0}
              src={aboutUsImage}
            />
          </S.SectionLeftColumn>

          <S.SectionContent noTitle>
            <S.SectionParagraph
              isAnimationActive={isAnimationActive}
              animationDelay={0}
            >
              Założyłyśmy dobrze. bo lubimy rozwiązania solidne, etyczne i
              estetyczne. Uważamy, że w biznesie ważna jest spójność i
              szczerość.  Projektując opieramy się na analizie danych, nie na
              przeczuciach.
            </S.SectionParagraph>
            <S.SectionParagraph
              isAnimationActive={isAnimationActive}
              animationDelay={100}
            >
              dobrze. to dla nas możliwość wprowadzania zmian - promowania
              etycznej sprzedaży, szczerości wobec klienta i rozwoju biznesu w
              oparciu o procesy, nad którymi masz kontrolę.
            </S.SectionParagraph>
            <S.SectionParagraph
              isAnimationActive={isAnimationActive}
              animationDelay={200}
            >
              Mamy doświadczenie w branży IT, a po godzinach od zawsze
              poświęcałyśmy czas sztuce.
            </S.SectionParagraph>

            <Media.TabletAndBigger>
              <S.SectionButton
                isAnimationActive={isAnimationActive}
                animationDelay={400}
              >
                <Button to="/kontakt">skontaktuj się z nami</Button>
              </S.SectionButton>
            </Media.TabletAndBigger>
          </S.SectionContent>
        </S.Section>

        <S.Section reversed>
          <Media.MobileOnly>
            <S.SectionTitle
              isAnimationActive={isAnimationActive}
              animationDelay={500}
            >
              Ada
            </S.SectionTitle>
          </Media.MobileOnly>

          <S.SectionLeftColumn>
            <S.SectionImage
              src={adaImage}
              isAnimationActive={isAnimationActive}
              animationDelay={500}
              reversed
            />
          </S.SectionLeftColumn>

          <S.SectionContent>
            <Media.TabletAndBigger>
              <S.SectionTitle
                isAnimationActive={isAnimationActive}
                animationDelay={500}
              >
                Ada
              </S.SectionTitle>
            </Media.TabletAndBigger>

            <Media.MobileOnly>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={700}
              >
                W dobrze. Zajmuję się analizą i tworzeniem wizerunku marki. Dbam
                o spójność obrazów i słów. Badam kogo przyciąga Twoja strona
                internetowa, czy docierasz tam gdzie chcesz dotrzeć. Wyznaczam
                metryki, które pozwalają mierzyć skuteczność działań i zrozumieć
                czego szukają klienci.
              </S.SectionParagraph>
            </Media.MobileOnly>

            <Media.TabletAndBigger>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={700}
              >
                W dobrze. Zajmuję się analizą i projektowaniem wizerunku marki.
                Dbam o równowagę i spójność pomiędzy obrazem i słowem. Badam
                kogo przyciąga Twoja strona internetowa, czy docierasz tam gdzie
                chcesz dotrzeć. Wyznaczam metryki, które pozwalają mierzyć
                skuteczność działań i zrozumieć czego szukają klienci.
              </S.SectionParagraph>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={800}
              >
                Od prawie 7 lat pracuję w branży IT, dbam o rozwój biznesów
                internetowych i skuteczną strategię marketingową. Jestem
                założycielką firmy dekoratorskiej, właścicielką 2 kotów i 6
                rowerów. dobrze. to dla mnie przede wszystkim realizacja pasji.
              </S.SectionParagraph>
            </Media.TabletAndBigger>

            <S.SectionFooter
              isAnimationActive={isAnimationActive}
              animationDelay={1000}
            >
              identyfikacja wizualna <br />
              budowanie strategii marketingowej <br />
              analiza strony <br />
              wyznaczanie metryk <br />
            </S.SectionFooter>
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <Media.MobileOnly>
            <S.SectionTitle
              isAnimationActive={isAnimationActive}
              animationDelay={1000}
            >
              Asia
            </S.SectionTitle>
          </Media.MobileOnly>

          <S.SectionLeftColumn>
            <S.SectionImage
              src={asiaImage}
              isAnimationActive={isAnimationActive}
              animationDelay={1000}
            />
          </S.SectionLeftColumn>

          <S.SectionContent>
            <Media.TabletAndBigger>
              <S.SectionTitle
                isAnimationActive={isAnimationActive}
                animationDelay={1000}
              >
                Asia
              </S.SectionTitle>
            </Media.TabletAndBigger>

            <Media.MobileOnly>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={1200}
              >
                W dobrze. zajmuje się analizą tego jak komunikujesz się z
                klientem. Kognitywne językoznawstwo i emocje w komunikacji to
                moje specjalizacje. Od 5 lat zajmuję się sprzedażą - tworzę
                lejki sprzedażowe i pomagam zrozumieć jak dbać o klienta.
                Projektuję grafiki i identyfikację wizualną.
              </S.SectionParagraph>
            </Media.MobileOnly>

            <Media.TabletAndBigger>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={1200}
              >
                W dobrze. zajmuje się analizą tego jak komunikujesz się z
                klientem. Językoznawstwo kognitywne i emocje w komunikacji to
                moje specjalizacje. Projektuję grafiki i identyfikację wizualną.
                Od 5 lat zajmuję się sprzedażą - tworzę lejki sprzedażowe i
                pomagam zrozumieć jak dbać o klienta.
              </S.SectionParagraph>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={1300}
              >
                Jestem UX-writerką, prowadzę warsztaty z analizy przekazu
                medialnego. Uwielbiam góry, książki i rośliny. dobrze. to dla
                mnie możliwość przekazywania wiedzy, motywacja do ciągłej nauki
                i okazja do pracy nad ciekawymi projektami.
              </S.SectionParagraph>
            </Media.TabletAndBigger>

            <S.SectionFooter
              isAnimationActive={isAnimationActive}
              animationDelay={1500}
            >
              identyfikacja wizualna <br />
              analiza językowa <br />
              lejki sprzedażowe <br />
              komunikacja <br />
            </S.SectionFooter>
          </S.SectionContent>
        </S.Section>
      </PageContent>
    </PageAnimation>
  )
}
