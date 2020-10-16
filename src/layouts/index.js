import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"
import GlobalStyle from "../theme/globalStyle"
import { FontFutura, FontLato } from "../theme/fonts"
import { IsInitializedContext } from "../context"
import FontFaceObserver from "fontfaceobserver"
import * as S from "./styled"
import aboutUsData from "../data/aboutUs"
import heroImage0 from "../images/hero_0.jpg"
import aboutUsImage from "../images/aboutUs.jpg"
import portfolioImage1 from "../images/portfolio_1.jpg"
import portfolioImage2 from "../images/portfolio_2.jpg"
import portfolioImage3 from "../images/portfolio_3.jpg"

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
    setIsMenuOpen(isOpen => !isOpen)
  }

  const handleLinkClick = async () => {
    setIsMenuOpen(false)
  }

  return (
    <S.Container isInitialized={isInitialized}>
      <Helmet
        title="dobrze."
        meta={[
          {
            name: "description",
            content:
              "Branding, marketing, procesy sprzedaży zrobione dobrze. Audyt komunikacji, optymalizacja procesów sprzedaży w IT.",
          },
        ]}
      >
        <link rel="preload" href={heroImage0} as="image" />
        <link rel="preload" href={aboutUsImage} as="image" />
        <link rel="preload" href={aboutUsData[0].photo} as="image" />
        <link rel="preload" href={aboutUsData[1].photo} as="image" />
        <link rel="preload" href={portfolioImage1} as="image" />
        <link rel="preload" href={portfolioImage2} as="image" />
        <link rel="preload" href={portfolioImage3} as="image" />
        <html lang="pl" />
      </Helmet>
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
