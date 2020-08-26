export const breakpoints = {
  mobileM: 375,
  tablet: 824,
  laptop: 1024,
  laptopM: 1280,
  desktop: 1920,
}

export const mediaQueries = {
  ...Object.keys(breakpoints).reduce((acc, breakpoint) => {
    return Object.assign(acc, {
      [breakpoint]: `@media (min-width: ${breakpoints[breakpoint]}px)`,
    })
  }, {}),
  mobileLandscape: `@media (max-width: ${breakpoints.tablet}px) and (orientation: landscape)`,
}
