import React, { useContext, useEffect, useState } from "react"
import * as S from "./Mission.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"
import { IsInitializedContext } from "../../context"
import { INTRO_ANIMATION_DELAY } from "../../components/IntroAnimation/IntroAnimation.styled"
import { Helmet } from "react-helmet"
import Dot from "../../components/Dot/Dot"
import PageContent from "../../components/PageContent/PageContent"
import Media from "../../components/Media/Media"
import TransitionLink from "gatsby-plugin-transition-link"
import Button from "../../components/Button/Button"
import { useQueryParam, StringParam } from "use-query-params"
import scrollTo from "gatsby-plugin-smoothscroll"

export default ({ transitionStatus, exit, entry }) => {
  const [activeTab, setActiveTab] = useQueryParam("activeTab", StringParam)

  const isInitialized = useContext(IsInitializedContext)
  const [isAnimationActive, setIsAnimationActive] = useState(false)
  const [
    isMobileSectionAnimationActive,
    setIsMobileSectionAnimationActive,
  ] = useState(false)

  useEffect(() => {
    if (isInitialized) {
      if (!entry.state.disableIntroAnimation) {
        const animationTimeout = setTimeout(() => {
          setIsAnimationActive(true)
        }, INTRO_ANIMATION_DELAY)

        return () => {
          clearTimeout(animationTimeout)
        }
      }

      requestAnimationFrame(() => {
        setIsAnimationActive(true)
      })
    }
  }, [isInitialized, entry.state.disableIntroAnimation])

  useEffect(() => {
    // initially set mobile section animation if on section page
    if (isAnimationActive && activeTab) {
      setTimeout(() => {
        setIsMobileSectionAnimationActive(true)
      }, 1300)

      setTimeout(() => {
        scrollTo(`#${activeTab}`)
      }, 1500)
    }
  }, [isAnimationActive, activeTab])

  useEffect(() => {
    // disable mobile section navigation if navigating to main page
    if (!activeTab) {
      setIsMobileSectionAnimationActive(false)
    }
  }, [activeTab])

  const handleNavigationClick = route => () => {
    if (!activeTab) {
      setActiveTab(route)
      setTimeout(() => {
        setIsMobileSectionAnimationActive(true)
      }, 500)
    }

    if (activeTab) {
      setIsMobileSectionAnimationActive(false)
      setTimeout(() => {
        setActiveTab(route)
        setTimeout(() => {
          setIsMobileSectionAnimationActive(true)
        }, 300)
      }, 600)
    }
  }

  const renderIntroContent = () => (
    <S.IntroContent>
      DLACZEGO <br />
      <S.IntroLogo>
        dobrze
        <Dot />
      </S.IntroLogo>
    </S.IntroContent>
  )

  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <Helmet title="Co robimy" />

      <IntroAnimation
        content={renderIntroContent()}
        started={isInitialized}
        active={!entry.state.disableIntroAnimation}
      >
        <PageContent>
          <S.HeroWrapper
            visible={!activeTab}
            isAnimationActive={isAnimationActive}
          >
            <S.Hero>
              <S.HeroText>
                Każda marka może odnieść sukces, niezależnie od budżetu. <br />
                Projektujemy procesy, które przynoszą wymierne korzyści. <br />{" "}
                Tworzymy dobry branding. <br /> Słuchamy klientów.
              </S.HeroText>
              <S.HeroCircle1 />
              <S.HeroCircle2 />
              <S.HeroCircle3 />
            </S.Hero>
          </S.HeroWrapper>

          <Media.MobileOnly>
            <S.Navigation isAnimationActive={isAnimationActive}>
              <S.NavigationLink
                active={activeTab === "branding"}
                onClick={handleNavigationClick("branding")}
              >
                BRANDING
              </S.NavigationLink>
              <S.NavigationLink
                active={activeTab === "analiza"}
                onClick={handleNavigationClick("analiza")}
              >
                ANALIZA
              </S.NavigationLink>
              <S.NavigationLink
                active={activeTab === "sprzedaz"}
                onClick={handleNavigationClick("sprzedaz")}
              >
                SPRZEDAŻ
              </S.NavigationLink>
            </S.Navigation>

            <S.MobileSections>
              <S.MobileSection active={activeTab === "branding"}>
                <S.MobileSectionParagraph
                  isAnimationActive={isMobileSectionAnimationActive}
                  animationDelay={0}
                >
                  Jeśli planujesz zmiany wizerunkowe, poddamy analizie Twoją
                  dotychczasową komunikację. Przygotujemy analizę rynku i
                  trendów, weźmiemy pod uwagę opinie Twoich klientów. Znajdziemy
                  mocne strony, na których zbudujemy propozycje rebrandingu.
                  Pomożemy Ci wdrożyć zmiany i zbudujemy dla Ciebie proces,
                  który pozwoli przeprowadzić rebranidng krok po kroku.
                </S.MobileSectionParagraph>
                <S.MobileSectionParagraph
                  isAnimationActive={isMobileSectionAnimationActive}
                  animationDelay={100}
                >
                  Jeśli dopiero planujesz stworzyć własną markę, zaczniemy od
                  analizy konkurencji. Pomożemy Ci odnaleźć coś, co wyróżni
                  Twoją ofertę spośród innych, Twój unique selling point.
                  Zajmiemy się storytellingiem, komunikacją językową i wizualną.
                  Wszystko w formie warsztatów, podczas których zrozumiesz, że
                  branding to więcej niż ładne logo. Dostarczymy Tobie
                  brandbook, który pozwoli tworzyć spójne treści w miarę
                  rozwijania się Twojego biznesu.
                </S.MobileSectionParagraph>
                <S.MobileSectionButton
                  isAnimationActive={isMobileSectionAnimationActive}
                  animationDelay={200}
                >
                  <TransitionLink
                    to="/kontakt"
                    exit={{ length: 0 }}
                    entry={{ length: 0 }}
                  >
                    umów sięna spotkanie
                  </TransitionLink>
                </S.MobileSectionButton>
              </S.MobileSection>
              <S.MobileSection active={activeTab === "analiza"}>
                <S.MobileSectionParagraph
                  isAnimationActive={isMobileSectionAnimationActive}
                  animationDelay={0}
                >
                  Zakres wykonywanej przez nas analizy obejmuje stronę
                  internetową, komunikację, rynek i tredny, oraz proces
                  sprzedaży. Wiemy, że każdy klient może potrzebować innych
                  informacji, dlatego za kżdym razem wspólnie decydujemy co
                  wejdzie w zakres naszej pracy. Analizując dane tworzymy
                  podstawę do dalszych działań. Nie lubimy projektować w ciemno.
                </S.MobileSectionParagraph>
                <S.MobileSectionParagraph
                  isAnimationActive={isMobileSectionAnimationActive}
                  animationDelay={100}
                >
                  Dzięki analizie dowiesz się dlaczego osoby odwiedzające Twoją
                  stronę nie stają się Twoimi klientami, gdzie komunikacja
                  zawodzi a gdzie pomaga. Krótko mówiąc - analiza odpowiada na
                  pytanie: gdzie leży problem. Dane pozwalają nam nazwać
                  obszary, które wymagają interwencji.
                </S.MobileSectionParagraph>
                <S.MobileSectionButton
                  isAnimationActive={isMobileSectionAnimationActive}
                  animationDelay={200}
                >
                  <TransitionLink
                    to="/kontakt"
                    exit={{ length: 0 }}
                    entry={{ length: 0 }}
                  >
                    umów sięna spotkanie
                  </TransitionLink>
                </S.MobileSectionButton>
              </S.MobileSection>
              <S.MobileSection active={activeTab === "sprzedaz"}>
                <S.MobileSectionParagraph
                  isAnimationActive={isMobileSectionAnimationActive}
                  animationDelay={0}
                >
                  Język, którego używasz powinien rezonować z Twoim odbiorcą.
                  Zamiast reklam, w pierwszej kolejności proponujemy wyznaczenie
                  persony, czyli modelowego wyobrażenia docelowego klienta. To
                  działanie pozwala na stworzenie odpowiedniej komunikacji, a
                  jasna komunikacja to podstawa etycznej sprzedaży.
                </S.MobileSectionParagraph>
                <S.MobileSectionParagraph
                  isAnimationActive={isMobileSectionAnimationActive}
                  animationDelay={100}
                >
                  Następnie zajmiemy się pracą z lejkiem sprzedażowym i
                  zbudujemy proces na miarę Twoich możliwości czasowych i
                  finansowych. Zadbamy o to, żeby klienci mogli łatwo odnaleźć
                  istotne dla nich informacje. Pomożemy Ci usunąć przeszkody
                  jakie leżą na ścieżce Twoich klientów.
                </S.MobileSectionParagraph>
                <S.MobileSectionButton
                  isAnimationActive={isMobileSectionAnimationActive}
                  animationDelay={200}
                >
                  <TransitionLink
                    to="/kontakt"
                    exit={{ length: 0 }}
                    entry={{ length: 0 }}
                  >
                    umów sięna spotkanie
                  </TransitionLink>
                </S.MobileSectionButton>
              </S.MobileSection>
            </S.MobileSections>
          </Media.MobileOnly>

          <Media.TabletAndBigger>
            <S.Section>
              <S.SectionScroller id="branding" />
              <S.SectionHeader
                isAnimationActive={isAnimationActive}
                animationDelay={0}
              >
                BRANDING
              </S.SectionHeader>
              <S.SectionSubHeader
                isAnimationActive={isAnimationActive}
                animationDelay={100}
              >
                Projektujemy spójną wizję i komunikację marki. Dbamy o to, żeby
                obraz i język dopełniały się na każdym kroku.
              </S.SectionSubHeader>

              <S.SectionSubtitle
                isAnimationActive={isAnimationActive}
                animationDelay={200}
              >
                ODŚWIEŻASZ WIZERUNEK FIRMY?
              </S.SectionSubtitle>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={300}
              >
                Zanim zaproponujemy zmiany przeanalizujemy to w jakim miejscu
                jest Twoja firma i jak komunikowała się do tej pory.
                Przygotujemy analizę rynku i trendów długoterminowych. Weźmiemy
                pod uwagę opinie Twoich klientów. Znajdziemy mocne strony, na
                których zbudujemy propozycje rebrandingu. Pomożemy Ci wdrożyć
                zmiany i zbudujemy dla Ciebie proces, który pozwoli
                przeprowadzić rebranidng krok po kroku.
              </S.SectionParagraph>

              <S.SectionSubtitle
                isAnimationActive={isAnimationActive}
                animationDelay={400}
              >
                ZAKŁADASZ BIZNES?
              </S.SectionSubtitle>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={500}
              >
                Zaczniemy od analizy konkurencji. Pomożemy Ci odnaleźć coś, co
                wyróżni Twoją ofertę spośród innych, Twój unique selling point.
                Zajmiemy się storytellingiem, komunikacją językową i wizualną.
                Wszystko w formie warsztatów, podczas których zrozumiesz, że
                branding to więcej niż ładne logo. Dostarczymy Tobie brandbook,
                który pozwoli tworzyć spójne treści w miarę rozwijania się
                Twojego biznesu.
              </S.SectionParagraph>

              <S.SectionButton
                isAnimationActive={isAnimationActive}
                animationDelay={600}
              >
                <Button to="/kontakt">umów się na spotkanie</Button>
              </S.SectionButton>

              <S.SectionBackgroundCircle1 />
              <S.SectionBackgroundCircle2 />
            </S.Section>

            <S.Section>
              <S.SectionScroller id="analiza" />
              <S.SectionHeader
                isAnimationActive={isAnimationActive}
                animationDelay={1000}
              >
                ANALIZA
              </S.SectionHeader>
              <S.SectionSubHeader
                isAnimationActive={isAnimationActive}
                animationDelay={1100}
              >
                Analizujemy podejmowanie przez Ciebie działania i wskazujemy
                miejsca, w których coś nie działa. Pomagamy je naprawić.
              </S.SectionSubHeader>

              <S.SectionSubtitle
                isAnimationActive={isAnimationActive}
                animationDelay={1200}
              >
                ANALIZA STRONY
              </S.SectionSubtitle>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={1300}
              >
                Jeśli chcesz dowiedzieć się dlaczego Twoja strona internetowa
                przyciąga odbiorców, ale nie stają się oni Twoimi klientami,
                przeanalizujemy ścieżkę użytkownika. Wskażemy miejsca, w których
                Twoi odbiorcy “odpadają” zamiast iść dalej. Zbadamy ruch na
                Twojej stronie, dzięki temu dowiesz się, gdzie Twój potencjalny
                klient spędza najwięcej czasu, a które strony są dla niego
                nieistotne. Opierając się o metody językoznawsta kognitywnego
                zbadamy język jakim mówisz do swoich odbiorców.
              </S.SectionParagraph>

              <S.SectionSubtitle
                isAnimationActive={isAnimationActive}
                animationDelay={1400}
              >
                ANALIZA RYNKU I TRENDÓW
              </S.SectionSubtitle>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={1500}
              >
                Jeśli dopiero zaczynasz budować własny biznes, przeprowadzimy
                dla Ciebie analizę rynku. Dostarczamy pakiet zawierający audyt
                działań konkurencyjnych firm. Wskażemy ich dobre praktyki, oraz
                to czego warto unikać. Dzięki analizie konkurencji będziesz w
                stanie określić swoją unikalną cechę oferty - coś co wyróżni Cię
                spośród innych firm czy marek osobistych w Twoim sektorze
                działalności.
              </S.SectionParagraph>

              <S.SectionSubtitle
                isAnimationActive={isAnimationActive}
                animationDelay={1600}
              >
                ANALIZA SPRZEDAŻY
              </S.SectionSubtitle>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={1700}
              >
                Nie osiągasz oczekiwanych wyników? Przeprowadzimy dla Ciebie
                pełen audyt sprzedaży, komunikacji i procesów. Spojrzymy świeżym
                okiem na Twój biznes i dostarczymy Tobie raport, który wskaże
                gdzie tracisz klientów, pieniądze i czas. Opracujemy lejek
                sprzedaży i wskarzemy miejsca, w których warto podjąć dodatkowe
                działanie.
              </S.SectionParagraph>

              <S.SectionButton
                isAnimationActive={isAnimationActive}
                animationDelay={1800}
              >
                <Button to="/kontakt">zamów audyt</Button>
              </S.SectionButton>

              <S.SectionBackgroundCircle3 />
              <S.SectionBackgroundCircle4 />
              <S.SectionBackgroundCircle5 />
            </S.Section>

            <S.Section>
              <S.SectionScroller id="sprzedaz" />
              <S.SectionHeader
                isAnimationActive={isAnimationActive}
                animationDelay={2000}
              >
                SPRZEDAŻ
              </S.SectionHeader>
              <S.SectionSubHeader
                isAnimationActive={isAnimationActive}
                animationDelay={2100}
              >
                Projektujemy ścieżki klienta, wyznaczamy persony, uczymy
                etycznej sprzedaży, opartej na łatwym i zrozumiałym procesie.
              </S.SectionSubHeader>

              <S.SectionSubtitle
                isAnimationActive={isAnimationActive}
                animationDelay={2200}
              >
                WYZNACZENIE PERSONY
              </S.SectionSubtitle>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={2300}
              >
                Język, którego używasz powinien rezonować z Twoim odbiorcą.
                Zamiast reklam proponujemy wyznaczenie modelowego wyobrażenia
                docelowego klienta (persony). To działanie pozwala na stworzenie
                odpowiedniej komunikacji. Pomożemy Ci odnaleźć wspólny język z
                klientami.
              </S.SectionParagraph>

              <S.SectionSubtitle
                isAnimationActive={isAnimationActive}
                animationDelay={2400}
              >
                LEJEK SPRZEDAŻOWY
              </S.SectionSubtitle>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={2500}
              >
                wyznaczymy etapy sprzedaży oraz sposoby zaangażowania klientów
                na każdym z nich. Zaproponujemy działania, na okres 3 miesięcy.
                Wszystko to przedstawimy w formie spójnego procesu, składającego
                się z segmentów. Działania jakie zaproponujemy będą dostosowane
                do wielkości Twojej firmy i Twoich możliwości czasowych. Na sam
                koniec pomożemy uporządkować nowo zdobytą wiedzę. Nasza
                współpraca może trwać dłużej - zawsze chętnie odpowiemy na
                pytania podczas konsultacji.
              </S.SectionParagraph>

              <S.SectionSubtitle
                isAnimationActive={isAnimationActive}
                animationDelay={2600}
              >
                ŚCIEŻKA KLIENTA
              </S.SectionSubtitle>
              <S.SectionParagraph
                isAnimationActive={isAnimationActive}
                animationDelay={2700}
              >
                Stworzyłyśmy skuteczny proces sprzedaży, który opiera się na
                działaniach wynikających z analizy danych. Żeby prowadzić
                skuteczną sprzedaż trzeba usunąć przeszkody jakie mogą pojawić
                się na drodze do zakupu. Zajmujemy się optymalizacją ścieżki
                klienta i projektowaniem doświadczeń, które ułatwiają mu
                podjęcie decyzji o zakupie. Nasze działania często oparte są o
                bezpłatne kroki, które możesz realizować samodzielnie.
              </S.SectionParagraph>

              <S.SectionButton
                isAnimationActive={isAnimationActive}
                animationDelay={2800}
              >
                <Button to="/kontakt">skontaktuj sięz nami</Button>
              </S.SectionButton>

              <S.SectionBackgroundCircle6 />
            </S.Section>
          </Media.TabletAndBigger>
        </PageContent>
      </IntroAnimation>
    </PageAnimation>
  )
}
