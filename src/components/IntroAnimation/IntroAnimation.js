import React, { useEffect, useState } from "react"
import * as S from "./IntroAnimation.styled"

export default ({ content, children }) => {
  const [displayChildren, setDisplayChildren] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayChildren(true)
    }, S.ANIMATION_DELAY)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <S.Container>
      <S.Content active={!displayChildren}>{content}</S.Content>
      <S.Children>{children}</S.Children>
    </S.Container>
  )
}
