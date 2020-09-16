import React, { useEffect } from "react"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import * as S from "./Menu.styled"
import TransitionLink from "gatsby-plugin-transition-link"
import heroImage1 from "../../images/hero_1.png"

export default ({
  location,
  animationDirection,
  isTransitionEnabled,
  isOpen,
  onLinkClick,
}) => {
  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.documentElement)
    } else {
      enableBodyScroll(document.documentElement)
    }
  }, [isOpen])

  return (
    <S.Container
      animationDirection={animationDirection}
      isTransitionEnabled={isTransitionEnabled}
      isOpen={isOpen}
    >
      <S.Content>
        <S.MenuItems>
          <S.MenuItem>
            <TransitionLink
              className={location.pathname.match(/aboutUs/) ? "active" : ""}
              to="/aboutUs"
              onClick={onLinkClick}
              exit={{ length: 0 }}
              entry={{ length: 0 }}
            >
              O nas
            </TransitionLink>
          </S.MenuItem>
          <S.MenuItem>
            <TransitionLink
              className={location.pathname.match(/mission/) ? "active" : ""}
              to="/mission"
              onClick={onLinkClick}
              exit={{ length: 0 }}
              entry={{ length: 0 }}
            >
              Co robimy
            </TransitionLink>
          </S.MenuItem>
          <S.MenuItem>
            <TransitionLink
              className={location.pathname.match(/portfolio/) ? "active" : ""}
              to="/portfolio"
              onClick={onLinkClick}
              exit={{ length: 0 }}
              entry={{ length: 0 }}
            >
              katalog zmian
            </TransitionLink>
          </S.MenuItem>
          <S.MenuItem>
            <TransitionLink
              className={location.pathname.match(/contact/) ? "active" : ""}
              to="/contact"
              onClick={onLinkClick}
              exit={{ length: 0 }}
              entry={{ length: 0 }}
            >
              kontakt
            </TransitionLink>
          </S.MenuItem>
        </S.MenuItems>

        <S.Image src={heroImage1} />
      </S.Content>
    </S.Container>
  )
}
