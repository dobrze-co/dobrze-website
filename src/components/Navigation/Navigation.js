import React, { Fragment } from "react"
import * as S from "./Navigation.styled"
import TransitionLink from "gatsby-plugin-transition-link"

export default ({ location, items, exitTransition, entryTransition }) => {
  return (
    <S.Container>
      {items.map((item, index) => {
        return (
          <Fragment key={item.path}>
            <TransitionLink
              to={item.path}
              exit={exitTransition}
              entry={entryTransition}
              className={location.pathname === item.path ? "active" : ""}
            >
              <S.Item active={location.pathname === item.path}>
                {item.label}
              </S.Item>
            </TransitionLink>
            {index < items.length - 1 && <S.Separator>&#8226;</S.Separator>}
          </Fragment>
        )
      })}
    </S.Container>
  )
}
