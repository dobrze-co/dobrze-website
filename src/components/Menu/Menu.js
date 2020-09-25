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
          <S.MenuItem isAnimationActive={isOpen} animationDelay={100}>
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
          <S.MenuItem isAnimationActive={isOpen} animationDelay={200}>
            <TransitionLink
              className={
                location.pathname.match(/katalog-zmian/) ? "active" : ""
              }
              to="/katalog-zmian"
              onClick={onLinkClick}
              exit={{ length: 0 }}
              entry={{ length: 0 }}
            >
              katalog zmian
            </TransitionLink>
          </S.MenuItem>
          <S.MenuItem isAnimationActive={isOpen} animationDelay={300}>
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

        <S.Image src={heroImage1} isAnimationActive={isOpen} />
      </S.Content>
    </S.Container>
  )
}
