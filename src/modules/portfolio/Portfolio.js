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
                <S.SectionParagraph>Analiza:</S.SectionParagraph>
                <S.SectionParagraph>
                  Wszystkie nasze działania projektujemy <strong>po</strong>{" "}
                  wykonaniu analizy danych, grup docelowych, trendów. Każde
                  proponowane przez nas rozwiązanie z czegoś wynika. Katalog
                  zmian zawiera pełen audyt komunikacji wizualnej, językowej i
                  udostępnionych przez Ciebie materiałów oraz analizę Twojej
                  konkurencji. Dzięki temu dowiesz z czego wynikają
                  zaprojektowane przez nas działania i zrozumiesz w jakich
                  obszarach zmiana jest niezbędna.
                </S.SectionParagraph>
              </S.SectionText>
              <S.SectionImage src={portfolioImage1} />
            </S.Section>

            <S.Section withOffset>
              <S.SectionText bottom>
                <S.SectionParagraph>Trendy:</S.SectionParagraph>
                <S.SectionParagraph>
                  Projektując zmianę przyglądamy się światowym trendom,
                  docieramy do raportów największych agencji i studiujemy
                  najnowsze badania rynku. Bierzemy pod uwagę lokalne i globalne
                  trendy długoterminowe i zachowania poszczególnych grup
                  konsumenckich. Projektowane przez nas zmiany są odpowiedzią na
                  szybko zmieniającą się rzeczywistość.
                </S.SectionParagraph>
              </S.SectionText>
              <S.SectionImage src={portfolioImage2} wide />
            </S.Section>

            <S.Section reversed>
              <S.SectionText top>
                <S.SectionParagraph>Katalog zmian:</S.SectionParagraph>
                <S.SectionParagraph>
                  Katalog zmian to 3 częściowy przewodnik po zaprojektowanych
                  dla Ciebie działaniach. Jego pierwsza część zawiera analizę.
                  Zawsze możesz do niej wrócić, jeśli, któreś z działań wyda Ci
                  się niejasne. Druga część poświęcona trendom pomoże Ci
                  samodzielnie kreować kolejne kampanie marketingowe. Nie chcemy
                  uzależniać Ciebie od naszej pomocy, zależy nam na Twojej
                  samodzielności w świecie marketingu. Ostatnia część to
                  proponowane przez nas zmiany w 3 wariantach. Każda z nich
                  zakłada inny nakład finansowy. Czuwamy nad całym procesem
                  wdrażania każdej ze zmian, niezależnie od jej wielkości.
                  Możesz liczyć na naszą pomoc.
                </S.SectionParagraph>
                <S.SectionParagraph>
                  Jeśli chcesz żebyśmy zaprojektowały zmianę dla Twojego
                  biznesu, mówimy <strong>dobrze.</strong>
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
