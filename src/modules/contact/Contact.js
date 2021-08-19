import React, { useContext, useEffect, useState } from "react"
import * as S from "./Contact.styled"
import fetchJsonp from "fetch-jsonp"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"
import { IsInitializedContext } from "../../context"
import { INTRO_ANIMATION_DELAY } from "../../components/IntroAnimation/IntroAnimation.styled"
import { Helmet } from "react-helmet"
import PageContent from "../../components/PageContent/PageContent"
import Media from "../../components/Media/Media"

const mailchimpUserId = "9e3b208a0a0c8cfd81b2654f2"
const mailchimpListId = "20847587b0"

export default ({ transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)
  const [emailValue, setEmailValue] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [isAnimationActive, setIsAnimationActive] = useState(false)

  useEffect(() => {
    if (isInitialized) {
      const animationTimeout = setTimeout(() => {
        setIsAnimationActive(true)
      }, INTRO_ANIMATION_DELAY)

      return () => {
        clearTimeout(animationTimeout)
      }
    }
  }, [isInitialized])

  const isEmailValid = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)
  }

  const handleSubmit = event => {
    event.preventDefault()

    setIsSubmitting(true)
    setSubmitError(false)
    setSubmitSuccess(false)

    fetchJsonp(
      `https://dobrze.us2.list-manage.com/subscribe/post-json?u=${mailchimpUserId}&id=${mailchimpListId}&EMAIL=${emailValue}&b_9e3b208a0a0c8cfd81b2654f2_20847587b0=''`,
      {
        jsonpCallback: "c",
      }
    )
      .then(data => data.json())
      .then(data => {
        if (data.result === "error") {
          setSubmitError(true)
          setIsSubmitting(false)
        } else {
          setSubmitSuccess(true)
          setIsSubmitting(false)
          setEmailValue("")
        }
      })
      .catch(data => {
        setSubmitError(true)
        setIsSubmitting(false)
      })
  }

  const handleEmailChange = event => {
    setEmailValue(event.target.value)
  }

  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <Helmet title="Kontakt" />

      <IntroAnimation
        withDot
        content="CZEŚĆ!"
        started={isInitialized}
        active={!entry.state.disableIntroAnimation}
      >
        <PageContent>
          <S.CenterWrapper>
            <S.CenterContainer>
              <S.Header isAnimationActive={isAnimationActive}>
                ZRÓBMY RAZEM COŚ <S.HeaderLogo>dobrego</S.HeaderLogo> DLA
                TWOJEGO BIZNESU
              </S.Header>

              <S.Form
                isAnimationActive={isAnimationActive}
                onSubmit={handleSubmit}
              >
                <S.InputWrapper>
                  <S.Input
                    value={emailValue}
                    placeholder="Wpisz swój email, odezwiemy się do Ciebie!"
                    onChange={handleEmailChange}
                  />
                  {isSubmitting && <S.InputLoader />}
                </S.InputWrapper>

                <S.SubmitContainer>
                  <Media.MobileOnly>
                    <S.SubmitMessage>
                      {submitSuccess && (
                        <S.SubmitMessageSuccess>
                          Dziękujemy!
                        </S.SubmitMessageSuccess>
                      )}
                      {submitError && (
                        <S.SubmitMessageError>
                          Coś poszło nie tak.
                        </S.SubmitMessageError>
                      )}
                    </S.SubmitMessage>
                  </Media.MobileOnly>

                  <S.Submit type="submit" disabled={!isEmailValid()}>
                    wyślij
                  </S.Submit>
                </S.SubmitContainer>
              </S.Form>

              <Media.TabletAndBigger>
                <S.SubmitMessage>
                  {submitSuccess && (
                    <S.SubmitMessageSuccess>Dziękujemy!</S.SubmitMessageSuccess>
                  )}
                  {submitError && (
                    <S.SubmitMessageError>
                      Coś poszło nie tak.
                    </S.SubmitMessageError>
                  )}
                </S.SubmitMessage>
              </Media.TabletAndBigger>

              <S.Footer>
                <S.FooterItem
                  isAnimationActive={isAnimationActive}
                  animationDelay={0}
                >
                  <S.FooterLink href="mailto:kontakt@dobrze.co">
                    kontakt@dobrze.co
                  </S.FooterLink>
                </S.FooterItem>

                <S.FooterItem
                  isAnimationActive={isAnimationActive}
                  animationDelay={200}
                >
                  <S.FooterLink href="tel:737880980">737 880 980</S.FooterLink>
                </S.FooterItem>
              </S.Footer>
            </S.CenterContainer>
          </S.CenterWrapper>
        </PageContent>
      </IntroAnimation>
    </PageAnimation>
  )
}
