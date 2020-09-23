import React, { useContext, useState } from "react"
import * as S from "./Contact.styled"
import fetchJsonp from "fetch-jsonp"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import IntroAnimation from "../../components/IntroAnimation/IntroAnimation"
import { IsInitializedContext } from "../../context"

const mailchimpUserId = "9e3b208a0a0c8cfd81b2654f2"
const mailchimpListId = "20847587b0"

export default ({ transitionStatus, exit, entry }) => {
  const isInitialized = useContext(IsInitializedContext)
  const [emailValue, setEmailValue] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

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
      <IntroAnimation
        content="CZEŚĆ!"
        started={isInitialized}
        active={!entry.state.disableIntroAnimation}
      >
        <S.Container>
          <S.Header>
            ZRÓBMY RAZEM RZECZY <S.HeaderLogo>dobrze.</S.HeaderLogo>
          </S.Header>

          <S.Form onSubmit={handleSubmit}>
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
