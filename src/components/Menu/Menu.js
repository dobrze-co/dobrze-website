import React, { useEffect } from "react"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import * as S from "./Menu.styled"
import { Link } from "gatsby"
import heroImage1 from "../../images/hero_1.png"

export default ({
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
            <Link to="/aboutUs" onClick={onLinkClick}>
              O nas
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/mission" onClick={onLinkClick}>
              Co robimy
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/portfolio" onClick={onLinkClick}>
              katalog zmian
            </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link to="/contact" onClick={onLinkClick}>
              kontakt
            </Link>
          </S.MenuItem>
        </S.MenuItems>

        <S.Image src={heroImage1} />
      </S.Content>
    </S.Container>
  )
}
