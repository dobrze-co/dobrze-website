import React, { Fragment } from "react"
import * as S from "./AboutUsDetails.styled"
import PageAnimation from "../../components/PageAnimation/PageAnimation"
import aboutUsData from "../../data/aboutUs.js"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../../components/PageAnimation/PageAnimation.styled"
import Arrow from "../../components/Arrow/Arrow"

export default ({ location, transitionStatus, exit, entry }) => {
  const aboutUsItem = aboutUsData.find(aboutUs =>
    location.pathname.includes(`/aboutUs/${aboutUs.path}`)
  )

  return (
    <PageAnimation
      transitionStatus={transitionStatus}
      exit={exit}
      entry={entry}
    >
      <S.Container>
        <S.MobileBackButton>
          <TransitionLink
            to="/aboutUs"
            exit={{ length: 0.5 }}
            entry={{
              length: 0,
              state: {
                animation: PAGE_ANIMATION.SLIDE_RIGHT,
                disableIntroAnimation: true,
              },
            }}
          >
            <Arrow direction="left" small />
            <S.MobileBackButtonText>POWRÓT</S.MobileBackButtonText>
          </TransitionLink>
        </S.MobileBackButton>

        <S.DesktopBackButton>
          <TransitionLink
            to="/aboutUs"
            exit={{ length: 0.5 }}
            entry={{
              length: 0,
              state: {
                animation: PAGE_ANIMATION.SLIDE_RIGHT,
                disableIntroAnimation: true,
              },
            }}
          >
            <Arrow direction="left" />
          </TransitionLink>
        </S.DesktopBackButton>

        <S.Content>
          <S.ContentBackground />

          <S.ContentMobileTitle>{aboutUsItem.name}</S.ContentMobileTitle>
          <S.ContentPhoto image={aboutUsItem.photo} />

          <S.ContentTextWrapper>
            <S.ContentDesktopTitle>{aboutUsItem.name}</S.ContentDesktopTitle>

            <S.ContentText>
              {aboutUsItem.paragraphs.map((paragraph, index) => (
                <S.ContentTextParagraph
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </S.ContentText>
          </S.ContentTextWrapper>
        </S.Content>

        <S.Features>
          {aboutUsItem.skills.map((skill, index) => {
            return (
              <Fragment key={index}>
                <S.Feature>{skill}</S.Feature>
                {index < aboutUsItem.skills.length - 1 && (
                  <S.Separator>&#8226;</S.Separator>
                )}
              </Fragment>
            )
          })}
        </S.Features>
      </S.Container>
    </PageAnimation>
  )
}
