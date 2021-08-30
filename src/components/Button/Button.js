import React from "react"
import * as S from "./Button.styled"
import TransitionLink from "gatsby-plugin-transition-link"

export default ({ children, to, onClick }) => {
  return (
    <S.Container>
      <TransitionLink
        to={to}
        onClick={onClick}
        exit={{ length: 0 }}
        entry={{ length: 0 }}
      >
        {children}
      </TransitionLink>
    </S.Container>
  )
}
