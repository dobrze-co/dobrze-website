import React, { useState, useEffect } from "react"
import * as S from "./Header.styled"
import TransitionLink from "gatsby-plugin-transition-link"
import { PAGE_ANIMATION } from "../PageAnimation/PageAnimation.styled"

export default ({
  isHamburgerOpen,
  location,
  onHamburgerClick,
  onHomepageClick,
}) => {
  const [isBackgroundActive, setIsBackgroundActive] = useState(false)

  const handleHamburgerClick = () => {
    if (onHamburgerClick) {
      onHamburgerClick()
    }
  }

  const handleScroll = () => {
    const top =
      (window.pageYOffset || document.documentElement.scrollTop) -
      (document.documentElement.clientTop || 0)

    if (!isBackgroundActive && top > 0) {
      setIsBackgroundActive(true)
    }

    if (isBackgroundActive && top === 0) {
      setIsBackgroundActive(false)
    }
  }

  const isOnHomepage = location.pathname === "/"

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isBackgroundActive, handleScroll])

  const renderHomepageLink = () => {
    if (isHamburgerOpen) {
      return (
        <TransitionLink
          onClick={onHomepageClick}
          to="/"
          exit={{ length: 0 }}
          entry={{ length: 0 }}
        >
          dobrze.
        </TransitionLink>
      )
    }

    return (
      <TransitionLink
        to="/"
        exit={{ length: 0.5 }}
        entry={{ length: 0, state: { animation: PAGE_ANIMATION.SLIDE_BOTTOM } }}
      >
        dobrze.
      </TransitionLink>
    )
  }

  return (
    <>
      <S.Background active={isBackgroundActive} />
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
