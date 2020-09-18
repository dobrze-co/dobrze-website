import React, { useContext } from "react"
import * as S from "./Portfolio.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"
import portfolioImage1 from "../../images/portfolio_1.png"
import portfolioImage2 from "../../images/portfolio_2.png"
import portfolioImage3 from "../../images/portfolio_3.png"
import { IsInitializedContext } from "../../context"

export default ({ transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)

  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <IntroAnimation
        content="JAK PROJEKTUJEMY ZMIANĘ?"
        started={isInitialized}
        active={!entry.state.disableIntroAnimation}
      >
        <S.Container>
          <S.HeaderContainer>
            <S.Header>KATALOG ZMIAN</S.Header>
          </S.HeaderContainer>

          <S.Sections>
            <S.Section reversed>
              <S.SectionText center>
                <S.SectionParagraph>
                  Katalog zmian to rodzaj audytu z rozbudowaną częścią dotyczącą
                  rozwiązywania problemów.
                </S.SectionParagraph>
                <S.SectionParagraph>
                  Katalog składa się z 3 części. Pierwsza z nich poświęcona jest
                  trendom dotyczącym Twojej branży. Dzięki niej lepiej
                  zrozumiesz jak rozwijać swój biznes w obliczu nadchodzących
                  zmian. Tę część opracowujemy w oparciu o raporty tworzone
                  przez najważniejsze światowe agencje, własne badania i analizę
                  konkurencji. Skupiamy się na trendach długoterminowych
                  wynikających ze zmiany stylu życia, nowej generacji wchodzącej
                  na rynek pracy, sytuacji polityczno-gospodarczej, a nie na
                  chwilowych modach.
                </S.SectionParagraph>
              </S.SectionText>
              <S.SectionImage src={portfolioImage1} />
            </S.Section>

            <S.Section withOffset>
              <S.SectionText bottom>
                <S.SectionParagraph>
                  Katalog zmian to rodzaj audytu z rozbudowaną częścią dotyczącą
                  rozwiązywania problemów.
                </S.SectionParagraph>
                <S.SectionParagraph>
                  Katalog składa się z 3 części. Pierwsza z nich poświęcona jest
                  trendom dotyczącym Twojej branży. Dzięki niej lepiej
                  zrozumiesz jak rozwijać swój biznes w obliczu nadchodzących
                  zmian. Tę część opracowujemy w oparciu o raporty tworzone
                  przez najważniejsze światowe agencje, własne badania i analizę
                  konkurencji. Skupiamy się na trendach długoterminowych
                  wynikających ze zmiany stylu życia, nowej generacji wchodzącej
                  na rynek pracy, sytuacji polityczno-gospodarczej, a nie na
                  chwilowych modach.
                </S.SectionParagraph>
              </S.SectionText>
              <S.SectionImage src={portfolioImage2} wide />
            </S.Section>

            <S.Section reversed>
              <S.SectionText top>
                <S.SectionParagraph>
                  Katalog zmian to rodzaj audytu z rozbudowaną częścią dotyczącą
                  rozwiązywania problemów.
                </S.SectionParagraph>
                <S.SectionParagraph>
                  Katalog składa się z 3 części. Pierwsza z nich poświęcona jest
                  trendom dotyczącym Twojej branży. Dzięki niej lepiej
                  zrozumiesz jak rozwijać swój biznes w obliczu nadchodzących
                  zmian. Tę część opracowujemy w oparciu o raporty tworzone
                  przez najważniejsze światowe agencje, własne badania i analizę
                  konkurencji. Skupiamy się na trendach długoterminowych
                  wynikających ze zmiany stylu życia, nowej generacji wchodzącej
                  na rynek pracy, sytuacji polityczno-gospodarczej, a nie na
                  chwilowych modach.
                </S.SectionParagraph>
                <S.SectionParagraph>
                  Druga część katalogu to analiza komunikacji marki. Na
                  przykładach pokazujemy w jakiej kondycji jest Twój biznes na
                  tle światowych i lokalnych trendów. Jest to rozszerzona wersja
                  audytu.
                </S.SectionParagraph>
              </S.SectionText>
              <S.SectionImage src={portfolioImage3} wide />
            </S.Section>
          </S.Sections>

          <S.Footer>
            <S.Logo>
              <S.LogoBackground />
              <S.LogoLetters>
                <S.LogoLetter>d</S.LogoLetter>
                <S.LogoDot>.</S.LogoDot>
              </S.LogoLetters>
            </S.Logo>
          </S.Footer>
        </S.Container>
      </IntroAnimation>
    </PageAnimation>
  )
}
