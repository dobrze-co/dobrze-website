import React, { useEffect, useState } from "react"
import * as S from "./IntroAnimation.styled"
import * as Transitions from "../../theme/transitions"

export default ({ content, active, started, children }) => {
  const [displayChildren, setDisplayChildren] = useState(!active)
  const [isAnimationFinished, setIsAnimationFinished] = useState(!active)

  useEffect(() => {
    if (!started) {
      return
    }

    const animationTimeout = setTimeout(() => {
      setDisplayChildren(true)
    }, S.ANIMATION_DELAY)

    const clearAnimationTimeout = setTimeout(() => {
      setIsAnimationFinished(true)
    }, S.ANIMATION_DELAY + Transitions.PAGE_TRANSITION_DURATION)

    return () => {
      clearTimeout(animationTimeout)
      clearTimeout(clearAnimationTimeout)
    }
  }, [started])

  return (
    <S.Container active={!displayChildren}>
      <S.Content
        active={!displayChildren}
        isAnimationFinished={isAnimationFinished}
      >
        {content}
      </S.Content>
      <S.Children>{children}</S.Children>
    </S.Container>
  )
}
