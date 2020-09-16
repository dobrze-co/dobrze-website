import React, { useState } from "react"
import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"
import GlobalStyle from "../theme/globalStyle"
import { FontFutura, FontLato } from "../theme/fonts"
import { waitFormDOMUpdate } from "../utils"

export default ({ children, location }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuTransitionEnabled, setIsMenuTransitionEnabled] = useState(true)
  const [meuAnimationDirection, setMeuAnimationDirection] = useState(
    "horizontal"
  )

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
      <Header
        isHamburgerOpen={isMenuOpen}
        location={location}
        onHamburgerClick={handleHamburgerClick}
        onHomepageClick={handleLinkClick}
      />
      <Menu
        location={location}
        animationDirection={meuAnimationDirection}
        isTransitionEnabled={isMenuTransitionEnabled}
        isOpen={isMenuOpen}
        onLinkClick={handleLinkClick}
      />

      {children}

      <FontFutura />
      <FontLato />
      <GlobalStyle />
    </div>
  )
}
