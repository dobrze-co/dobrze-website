import React from "react"
import * as S from "./Contact.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"

export default ({ transitionStatus, exit, entry }) => {
  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <IntroAnimation
        content="CZEŚĆ!"
        active={!entry.state.disableIntroAnimation}
      >
        <S.Container>
          <S.Header>ZRÓBMY RAZEM RZECZY DOBRZE.</S.Header>

          <S.Input placeholder="WPISZ SWÓJ EMAIL" />

          <S.SubmitContainer>
            <S.Submit type="button">WYŚLIJ</S.Submit>
          </S.SubmitContainer>

          <S.Footer>
            <S.FooterDesktopHeader>ZADZWOŃ / NAPISZ</S.FooterDesktopHeader>
            <S.FooterMobileHeader>ZADZWOŃ</S.FooterMobileHeader>
            <S.FooterItem>
              Asia <S.FooterLink href="tel:777777777">777777777</S.FooterLink>
            </S.FooterItem>
            <S.FooterItem withDesktopSpacing>
              Ada <S.FooterLink href="tel:777777777">777777777</S.FooterLink>
            </S.FooterItem>
            <S.FooterMobileHeader>NAPISZ</S.FooterMobileHeader>
            <S.FooterItem>
              <S.FooterLink href="mailto:kontakt@dobrze.co">
                kontakt@dobrze.co
              </S.FooterLink>
            </S.FooterItem>
          </S.Footer>
        </S.Container>
      </IntroAnimation>
    </PageAnimation>
  )
}
