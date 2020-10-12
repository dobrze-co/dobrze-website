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
          <S.MenuItem isAnimationActive={isOpen} animationDelay={0}>
            <TransitionLink
              className={location.pathname.match(/o-nas/) ? "active" : ""}
              to="/o-nas"
              onClick={onLinkClick}
              exit={{ length: 0 }}
              entry={{ length: 0 }}
            >
              O nas
            </TransitionLink>
          </S.MenuItem>
          <S.MenuItem isAnimationActive={isOpen} animationDelay={150}>
            <TransitionLink
              className={location.pathname.match(/co-robimy/) ? "active" : ""}
              to="/co-robimy"
              onClick={onLinkClick}
              exit={{ length: 0 }}
              entry={{ length: 0 }}
            >
              Co robimy
            </TransitionLink>
          </S.MenuItem>
          <S.MenuItem isAnimationActive={isOpen} animationDelay={300}>
            <TransitionLink
              className={
                location.pathname.match(/katalog-zmian/) ? "active" : ""
              }
              to="/katalog-zmian"
              onClick={onLinkClick}
              exit={{ length: 0 }}
              entry={{ length: 0 }}
            >
              jak pracujemy
            </TransitionLink>
          </S.MenuItem>
          <S.MenuItem isAnimationActive={isOpen} animationDelay={450}>
            <TransitionLink
              className={location.pathname.match(/kontakt/) ? "active" : ""}
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
