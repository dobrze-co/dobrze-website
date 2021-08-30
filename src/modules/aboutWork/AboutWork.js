import React, { useContext, useEffect, useState } from "react"
import * as S from "./AboutWork.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import PageContent from "../../components/PageContent/PageContent"
import Button from "../../components/Button/Button"
import Media from "../../components/Media/Media"
import { IsInitializedContext } from "../../context"
import aboutWorkImage1 from "../../images/aboutWork_1.jpg"
import aboutWorkImage2 from "../../images/aboutWork_2.jpg"
import aboutWorkImage3 from "../../images/aboutWork_3.jpg"
import { preloadImages } from "../../utils"
import { Helmet } from "react-helmet"

export default ({ transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)
  const [isAnimationActive, setIsAnimationActive] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    preloadImages([aboutWorkImage1, aboutWorkImage2, aboutWorkImage3]).then(
      () => {
        setImagesLoaded(true)
      }
    )
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
      <Helmet title="Jak pracujemy" />

      <PageContent>
        <S.Section>
          <S.SectionContent>
            <S.SectionTitle
              isAnimationActive={isAnimationActive}
              animationDelay={0}
            >
              Analiza
            </S.SectionTitle>

            <Media.MobileOnly>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={200}
              >
                Wszystkie działania rozpoczynamy od analizy. Przyglądamy się
                danym, żeby wiedzieć gdzie realnie leży problem, który chcesz
                rozwiązać.
              </S.SectionParagraph>
            </Media.MobileOnly>

            <Media.TabletAndBigger>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={200}
              >
                Nasze działania opieramy na analizie czynników biznesowych
                zależnych i niezależnych od Ciebie. Audyt komunikacji językowej
                i wizualnej marki przeprowadzamy przed spotkaniem. Dzięki temu
                możemy obiektywnie zbadać ścieżkę klienta. Pozwoli nam to
                wskazać jego prawdziwe problemy. Analiza konkurencji i trendów
                długoterminowych daje nam kontekst, który pozwala rozpocząć
                proces projektowy.
              </S.SectionParagraph>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={300}
              >
                Uzbrojone w wiedzę, jaką zdobyłyśmy na podstawie badań i analizy
                danych, zabieramy się do dalszej pracy. Takie solidne
                przygotowanie jest dla Ciebie gwarancją, że proponowane przez
                nas rozwiązania odpowiadają na realne problemy.
              </S.SectionParagraph>

              <S.SectionButton
                isAnimationActive={isAnimationActive}
                animationDelay={400}
              >
                <Button to="/kontakt">zamów audyt</Button>
              </S.SectionButton>
            </Media.TabletAndBigger>
          </S.SectionContent>

          <S.SectionLeftColumn>
            <S.SectionImage
              isAnimationActive={isAnimationActive}
              animationDelay={0}
              src={aboutWorkImage1}
            />
          </S.SectionLeftColumn>
        </S.Section>

        <S.Section reversed>
          <S.SectionContent reversed>
            <S.SectionTitle
              isAnimationActive={isAnimationActive}
              animationDelay={500}
            >
              Proces
            </S.SectionTitle>

            <Media.MobileOnly>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={700}
              >
                Projektowane przez nas działania opierają się na procesach,
                które rozwijają się wraz z rozwojem biznesu. Dzięki schematom
                wiesz kiedy podjąć działanie, jaki ma dać wynik i ile czasu
                musisz poświęcić na realizację zadania.
              </S.SectionParagraph>
            </Media.MobileOnly>

            <Media.TabletAndBigger>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={700}
              >
                Jesteśmy fankami spójności, porządku i działań, które mają sens.
                Dobrze zaprojektowany proces prowadzi do jasno wyznaczonego
                celu, ma konkretne kroki, które muszą zostać wykonane w
                odpowiednim czasie. Można go przedstawić w formie schematów,
                które wskazują odpowiednie działanie. Wiemy, że przez chaos
                można stracić pieniądze i czas. Procesy porządkują pracę w
                firmie, a dla firm jednoosobowych są ratunkiem przed lawiną
                zadań „na już”.
              </S.SectionParagraph>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={800}
              >
                Każde, nawet najmniejsze działanie, zamykamy w procesie. Zaletą
                tej metody jest to, że nigdy nie zgubisz się w tym na jakim
                etapie pracy, komunikacji czy sprzedaży jesteś. Jeśli Twoja
                firma rośnie, proces można rozbudować o dodatkowe zadania czy
                role.
              </S.SectionParagraph>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={900}
              >
                Instrukcja działań “krok po kroku” przydaje się nowym markom,
                wchodzącym na rynek i tym, które „sprzedają od zawsze”. Proces
                pozwala szybko naprawić elementy, które zawodzą. Jest
                odpowiedzią na szybko zmieniającą się rzeczywistość. Zamiast
                budować strategię działań od zera, lepiej tylko wymieniać
                elementy, które przestały się sprawdzać.
              </S.SectionParagraph>

              <S.SectionButton
                isAnimationActive={isAnimationActive}
                animationDelay={1000}
              >
                <Button to="/kontakt">stwórz proces dla swojej firmy</Button>
              </S.SectionButton>
            </Media.TabletAndBigger>
          </S.SectionContent>

          <S.SectionLeftColumn reversed>
            <S.SectionImage
              src={aboutWorkImage2}
              isAnimationActive={isAnimationActive}
              animationDelay={500}
              reversed
            />
          </S.SectionLeftColumn>
        </S.Section>

        <S.Section>
          <S.SectionContent>
            <S.SectionTitle
              isAnimationActive={isAnimationActive}
              animationDelay={1000}
            >
              Katalog <S.NoWrap>zmian /</S.NoWrap> Brandbook
            </S.SectionTitle>

            <Media.MobileOnly>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={1200}
              >
                Wynikiem naszej pracy nad brandingiem jest brandbook, który
                dostarczymy w formie papierowej i elektronicznej. Namacalna
                forma to nie tylko podgląd tego, jak kolory prezentują się w
                druku. To też narzędzie warsztatowe. Katalog zmian to dokument,
                który otrzymujesz w wyniku opracowanego przez nas rebrandingu.
                Znajdują się w nim 3 propozycje zmiany - każda wymagająca innego
                nakładu pracy. To Ty decydujesz, którą wybierasz. Z czasem
                możesz zrealizować wszystkie proponowane przez nas zmiany.
              </S.SectionParagraph>
            </Media.MobileOnly>

            <Media.TabletAndBigger>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={1200}
              >
                Wynikiem naszej pracy nad brandingiem jest brandbook, który
                dostarczymy w formie papierowej i elektronicznej. Namacalna
                forma to nie tylko podgląd tego, jak kolory prezentują się w
                druku. To też narzędzie warsztatowe. Powiększając swój zespół
                zadbaj o to, żeby każdy mógł poczuć, czym jest Twoja firma. To
                również narzędzie przydatne podczas burzy mózgów, rekrutacji,
                planowania kampanii reklamowych czy marketingowych.
              </S.SectionParagraph>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={1300}
              >
                Katalog Zmian dostarczamy w wyniku pracy nad rebrandigiem. W
                katalogu znajduje się analiza trendów, komunikacji językowej i
                wizualnej oraz trzy propozycje zmian. Katalog w formie
                papierowej jest dla nas narzędziem, które wykorzystujemy podczas
                warsztatów, na których opracowujemy ostateczną formę działań.
              </S.SectionParagraph>

              <S.SectionButton
                isAnimationActive={isAnimationActive}
                animationDelay={1400}
              >
                <Button to="/kontakt">zamów katalog zmian / brandbook</Button>
              </S.SectionButton>
            </Media.TabletAndBigger>
          </S.SectionContent>

          <S.SectionLeftColumn>
            <S.SectionImage
              src={aboutWorkImage3}
              isAnimationActive={isAnimationActive}
              animationDelay={1000}
            />
          </S.SectionLeftColumn>
        </S.Section>
      </PageContent>
    </PageAnimation>
  )
}
