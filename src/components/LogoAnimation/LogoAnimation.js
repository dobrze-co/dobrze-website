import React from "react"
import * as S from "./LogoAnimation.styled"

export default ({ active, children }) => {
  const letters = children.split("")
  return (
    <S.Container>
      {letters.map((letter, index) => (
        <S.Letter
          key={index}
          position={index}
          active={active}
          last={index === letters.length - 1}
        >
          {letter}
        </S.Letter>
      ))}
    </S.Container>
  )
}
