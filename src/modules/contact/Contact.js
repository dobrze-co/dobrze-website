import React, { useContext, useEffect, useState } from "react"
import * as S from "./Contact.styled"
import fetchJsonp from "fetch-jsonp"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"
import { IsInitializedContext } from "../../context"
import { INTRO_ANIMATION_DELAY } from "../../components/IntroAnimation/IntroAnimation.styled"
import { Helmet } from "react-helmet"

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
        content="CZEŚĆ!"
        started={isInitialized}
        active={!entry.state.disableIntroAnimation}
      >
        <S.Container>
          <S.Header isAnimationActive={isAnimationActive}>
            ZRÓBMY RAZEM RZECZY, <S.HeaderLogo>dobrze.</S.HeaderLogo>
          </S.Header>

          <S.Form isAnimationActive={isAnimationActive} onSubmit={handleSubmit}>
            <S.InputWrapper>
              <S.Input
                value={emailValue}
                placeholder="WPISZ SWÓJ EMAIL"
                onChange={handleEmailChange}
              />
              {isSubmitting && <S.InputLoader />}
            </S.InputWrapper>

            <S.SubmitContainer>
              <S.Submit type="submit" disabled={!isEmailValid()}>
                WYŚLIJ
              </S.Submit>
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
            </S.SubmitContainer>
          </S.Form>

          <S.Footer>
            <S.FooterDesktopHeader
              isAnimationActive={isAnimationActive}
              animationDelay={0}
            >
              ZADZWOŃ / NAPISZ
            </S.FooterDesktopHeader>
            <S.FooterMobileHeader
              isAnimationActive={isAnimationActive}
              animationDelay={200}
            >
              ZADZWOŃ
            </S.FooterMobileHeader>
            <S.FooterItem
              isAnimationActive={isAnimationActive}
              animationDelay={200}
            >
              Asia <S.FooterLink href="tel:777777777">777777777</S.FooterLink>
            </S.FooterItem>
            <S.FooterItem
              isAnimationActive={isAnimationActive}
              animationDelay={200}
              withDesktopSpacing
            >
              Ada <S.FooterLink href="tel:777777777">777777777</S.FooterLink>
            </S.FooterItem>
            <S.FooterMobileHeader
              isAnimationActive={isAnimationActive}
              animationDelay={400}
            >
              NAPISZ
            </S.FooterMobileHeader>
            <S.FooterItem
              isAnimationActive={isAnimationActive}
              animationDelay={400}
            >
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
