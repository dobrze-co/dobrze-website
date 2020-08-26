import React from "react"
import * as S from "./Header.styled"
import TransitionLink from "gatsby-plugin-transition-link"
import { Link } from "gatsby"

export default ({
  isHamburgerOpen,
  location,
  onHamburgerClick,
  onHomepageClick,
}) => {
  const handleHamburgerClick = () => {
    if (onHamburgerClick) {
      onHamburgerClick()
    }
  }

  const isOnHomepage = location.pathname === "/"

  const renderHomepageLink = () => {
    if (isHamburgerOpen) {
      return (
        <Link onClick={onHomepageClick} to="/">
          dobrze.
        </Link>
      )
    }

    return (
      <TransitionLink to="/" exit={{ length: 1 }} entry={{ length: 0 }}>
        dobrze.
      </TransitionLink>
    )
  }

  return (
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
  )
}
