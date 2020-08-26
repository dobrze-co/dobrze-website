import React from "react"
import * as S from "./Mission.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"

export default ({ transitionStatus }) => {
  const renderIntroContent = () => (
    <S.IntroContent>
      CZYM JEST <br /> <S.IntroLogo>dobrze.</S.IntroLogo>
    </S.IntroContent>
  )

  return (
    <PageAnimation transitionStatus={transitionStatus}>
      <IntroAnimation content={renderIntroContent()}>
        <S.Container>
          <S.Content>
            <S.ContentText>
              We transform brands, grow businesses tell stories that deepen
              engagement
            </S.ContentText>
            <S.ContentBackground />
          </S.Content>

          <S.Footer>PR &#8226; BRANDING &#8226; MARKETING</S.Footer>

          <S.ArrowContainer>
            <S.Arrow />
          </S.ArrowContainer>
        </S.Container>
      </IntroAnimation>
    </PageAnimation>
  )
}
