import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header/Header"
import Menu from "../components/Menu/Menu"
import GlobalStyle from "../theme/globalStyle"
import { FontFutura } from "../theme/fonts"
import { IsInitializedContext } from "../context"
import FontFaceObserver from "fontfaceobserver"
import * as S from "./styled"
import heroImage0 from "../images/hero_0.jpg"
import aboutUsImage from "../images/aboutUs.jpg"
import adaImage from "../images/ada.jpg"
import asiaImage from "../images/asia.jpg"
import aboutWorkImage1 from "../images/aboutWork_1.jpg"
import aboutWorkImage2 from "../images/aboutWork_2.jpg"
import aboutWorkImage3 from "../images/aboutWork_3.jpg"

const futuraObserver = new FontFaceObserver("Futura")

export default ({ children, location, pageContext }) => {
  const [isInitialized, setIsInitialized] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isOn404Page = pageContext.is404

  useEffect(() => {
    Promise.all([futuraObserver.load()]).then(() => {
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
        titleTemplate="%s - dobrze."
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
        <link rel="preload" href={adaImage} as="image" />
        <link rel="preload" href={asiaImage} as="image" />
        <link rel="preload" href={aboutWorkImage1} as="image" />
        <link rel="preload" href={aboutWorkImage2} as="image" />
        <link rel="preload" href={aboutWorkImage3} as="image" />
        <html lang="pl" />

        <meta property="og:title" content="dobrze." />
        <meta
          property="og:description"
          content="Branding, marketing, procesy sprzedaży zrobione dobrze. Audyt komunikacji, optymalizacja procesów sprzedaży w IT."
        />
        <meta property="og:image" content="/images/share.jpg" />
        <meta property="og:url" content="http://dobrze.co" />

        <meta name="twitter:title" content="dobrze." />
        <meta
          name="twitter:description"
          content="Branding, marketing, procesy sprzedaży zrobione dobrze. Audyt komunikacji, optymalizacja procesów sprzedaży w IT."
        />
        <meta name="twitter:image" content="/images/share.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
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
      <GlobalStyle />
    </S.Container>
  )
}
