import React, { useState } from "react"
import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"
import GlobalStyle from "../theme/globalStyle"
import { FontFutura, FontLato } from "../theme/fonts"
import { waitFormDOMUpdate } from "../utils"

export default ({ children, location, pageContext }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuTransitionEnabled, setIsMenuTransitionEnabled] = useState(true)
  const [meuAnimationDirection, setMeuAnimationDirection] = useState(
    "horizontal"
  )
  const isOn404Page = pageContext.is404

  const handleHamburgerClick = async () => {
    setIsMenuTransitionEnabled(false)

    await waitFormDOMUpdate()
    setMeuAnimationDirection("horizontal")

    await waitFormDOMUpdate()
    setIsMenuTransitionEnabled(true)

    await waitFormDOMUpdate()
    setIsMenuOpen(isOpen => !isOpen)
  }

  const handleLinkClick = async () => {
    setIsMenuTransitionEnabled(false)

    await waitFormDOMUpdate()
    setMeuAnimationDirection("vertical")

    await waitFormDOMUpdate()
    setIsMenuTransitionEnabled(true)

    await waitFormDOMUpdate()
    setIsMenuOpen(false)
  }

  return (
    <div>
      {!isOn404Page && (
        <Header
          isHamburgerOpen={isMenuOpen}
          location={location}
          isOn404Page={isOn404Page}
          onHamburgerClick={handleHamburgerClick}
          onHomepageClick={handleLinkClick}
        />
      )}

      {!isOn404Page && (
        <Menu
          location={location}
          animationDirection={meuAnimationDirection}
          isTransitionEnabled={isMenuTransitionEnabled}
          isOpen={isMenuOpen}
          onLinkClick={handleLinkClick}
        />
      )}

      {children}

      <FontFutura />
      <FontLato />
      <GlobalStyle />
    </div>
  )
}
