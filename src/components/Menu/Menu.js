import React, { useEffect } from "react"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import * as S from "./Menu.styled"
import TransitionLink from "gatsby-plugin-transition-link"

export default ({ location, isOpen, onLinkClick }) => {
  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.documentElement)
    } else {
      enableBodyScroll(document.documentElement)
    }
  }, [isOpen])

  return (
    <S.Container isOpen={isOpen}>
      <S.Content>
        <S.MenuItems>
          <S.MenuItem
            isAnimationActive={isOpen}
            animationDelay={0}
            active={location.pathname.match(/o-nas/)}
          >
            <TransitionLink
              to="/o-nas"
              onClick={onLinkClick}
              exit={{ length: 0 }}
              entry={{ length: 0 }}
            >
              Poznaj nas
            </TransitionLink>
          </S.MenuItem>
          <S.MenuItem
            isAnimationActive={isOpen}
            animationDelay={100}
            active={location.pathname.match(/co-robimy/)}
          >
            <TransitionLink
              to="/co-robimy"
              onClick={onLinkClick}
              exit={{ length: 0 }}
              entry={{ length: 0 }}
            >
              Co robimy
            </TransitionLink>
          </S.MenuItem>
          <S.MenuItem
            isAnimationActive={isOpen}
            animationDelay={200}
            active={location.pathname.match(/jak-pracujemy/)}
          >
            <TransitionLink
              to="/jak-pracujemy"
              onClick={onLinkClick}
              exit={{ length: 0 }}
              entry={{ length: 0 }}
            >
              Jak pracujemy
            </TransitionLink>
          </S.MenuItem>
          <S.MenuItem
            isAnimationActive={isOpen}
            animationDelay={300}
            active={location.pathname.match(/projekty/)}
          >
            <TransitionLink
              to="/projekty"
              onClick={onLinkClick}
              exit={{ length: 0 }}
              entry={{ length: 0 }}
            >
              Projekty
            </TransitionLink>
          </S.MenuItem>
          <S.MenuItem
            isAnimationActive={isOpen}
            animationDelay={400}
            active={location.pathname.match(/kontakt/)}
          >
            <TransitionLink
              to="/kontakt"
              onClick={onLinkClick}
              exit={{ length: 0 }}
              entry={{ length: 0 }}
            >
              kontakt
            </TransitionLink>
          </S.MenuItem>
        </S.MenuItems>
      </S.Content>
    </S.Container>
  )
}
