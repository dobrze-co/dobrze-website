import React, { useState, useEffect, useCallback } from "react"
import * as S from "./Header.styled"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../PageAnimation/PageAnimation.styled"
import LogoAnimation from "../LogoAnimation/LogoAnimation"
import * as Colors from "../../theme/colors"

export default ({
  isHamburgerOpen,
  location,
  onHamburgerClick,
  onHomepageClick,
}) => {
  const [isBackgroundActive, setIsBackgroundActive] = useState(false)

  const isOnHomepage = location.pathname === "/"
  const isOnContactPage = location.pathname.includes("/kontakt")

  const getHeaderBackground = useCallback(() => {
    if (isOnContactPage) {
      return Colors.Accent
    }
    return Colors.White
  }, [isOnContactPage])

  const handleHamburgerClick = () => {
    if (onHamburgerClick) {
      onHamburgerClick()
    }
  }

  const handleScroll = useCallback(() => {
    const top =
      (window.pageYOffset || document.documentElement.scrollTop) -
      (document.documentElement.clientTop || 0)

    if (!isBackgroundActive && top > 0) {
      setIsBackgroundActive(true)
    }

    if (isBackgroundActive && top === 0) {
      setIsBackgroundActive(false)
    }
  }, [isBackgroundActive])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const renderHomepageLink = () => {
    if (isHamburgerOpen) {
      return (
        <TransitionLink
          onClick={onHomepageClick}
          to="/"
          exit={{ length: 0 }}
          entry={{ length: 0 }}
        >
          <LogoAnimation isAnimationActive={!isOnHomepage}>
            dobrze.
          </LogoAnimation>
        </TransitionLink>
      )
    }

    return (
      <TransitionLink
        to="/"
        exit={{ length: 0.8 }}
        entry={{ length: 0, state: { animation: PAGE_ANIMATION.FADE } }}
      >
        <LogoAnimation isAnimationActive={!isOnHomepage}>dobrze.</LogoAnimation>
      </TransitionLink>
    )
  }

  return (
    <>
      <S.Background active={isBackgroundActive} color={getHeaderBackground()} />
      <S.Container>
        <S.Hamburger onClick={handleHamburgerClick}>
          <S.HamburgerBar isOpen={isHamburgerOpen} />
          <S.HamburgerBar isOpen={isHamburgerOpen} />
          <S.HamburgerBar isOpen={isHamburgerOpen} />
        </S.Hamburger>
        <S.HomepageButton active={!isOnHomepage}>
          {renderHomepageLink()}
        </S.HomepageButton>
      </S.Container>
    </>
  )
}
