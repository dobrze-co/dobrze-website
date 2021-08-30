import React, { useEffect, useState } from "react"
import * as S from "./IntroAnimation.styled"
import * as Transitions from "../../theme/transitions"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"

export default ({ content, active, started, infinite, withDot, children }) => {
  const [displayChildren, setDisplayChildren] = useState(!active)
  const [isAnimationFinished, setIsAnimationFinished] = useState(!active)
  const [isContentAnimationActive, setIsContentAnimationActive] = useState(
    false
  )

  useEffect(() => {
    if (!started) {
      return
    }

    disableBodyScroll(document.documentElement)

    if (infinite) {
      return
    }

    const animationTimeout = setTimeout(() => {
      setDisplayChildren(true)
    }, S.INTRO_ANIMATION_DELAY)

    const clearAnimationTimeout = setTimeout(() => {
      enableBodyScroll(document.documentElement)
      setIsAnimationFinished(true)
    }, S.INTRO_ANIMATION_DELAY + Transitions.PAGE_TRANSITION_DURATION)

    return () => {
      clearTimeout(animationTimeout)
      clearTimeout(clearAnimationTimeout)
    }
  }, [started, infinite])

  useEffect(() => {
    if (!displayChildren) {
      const animationTimeout = setTimeout(() => {
        setIsContentAnimationActive(true)
      }, Transitions.PAGE_TRANSITION_DURATION)

      return () => {
        clearTimeout(animationTimeout)
      }
    }
  }, [displayChildren])

  return (
    <S.Container active={!displayChildren}>
      <S.Content
        active={!displayChildren}
        isAnimationFinished={isAnimationFinished}
      >
        <S.ContentWrapper isAnimationActive={isContentAnimationActive}>
          {content}
        </S.ContentWrapper>
        {withDot && <S.IntroDot isAnimationActive={isContentAnimationActive} />}
      </S.Content>
      <S.Children>{children}</S.Children>
    </S.Container>
  )
}
