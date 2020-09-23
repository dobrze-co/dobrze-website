import React, { useEffect, useState } from "react"
import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"
import GlobalStyle from "../theme/globalStyle"
import { FontFutura, FontLato } from "../theme/fonts"
import { waitFormDOMUpdate } from "../utils"
import { IsInitializedContext } from "../context"
import FontFaceObserver from "fontfaceobserver"
import * as S from "./styled"

const futuraObserver = new FontFaceObserver("Futura")
const latoNormalObserver = new FontFaceObserver("Lato", {
  weight: "normal",
})
const latoBoldObserver = new FontFaceObserver("Lato", {
  weight: "bold",
})

export default ({ children, location, pageContext }) => {
  const [isInitialized, setIsInitialized] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuTransitionEnabled, setIsMenuTransitionEnabled] = useState(true)
  const [meuAnimationDirection, setMeuAnimationDirection] = useState(
    "horizontal"
  )
  const isOn404Page = pageContext.is404

  useEffect(() => {
    Promise.all([
      futuraObserver.load(),
      latoNormalObserver.load(),
      latoBoldObserver.load(),
    ]).then(() => {
      setIsInitialized(true)
    })
  }, [])

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
    <S.Container isInitialized={isInitialized}>
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

      <IsInitializedContext.Provider value={isInitialized}>
        {children}
      </IsInitializedContext.Provider>

      <FontFutura />
      <FontLato />
      <GlobalStyle />
    </S.Container>
  )
}
