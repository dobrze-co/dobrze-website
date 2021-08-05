import React from "react"
import * as S from "./Media.styled"

export const MobileOnly = ({ children }) => {
  return <S.MobileOnly>{children}</S.MobileOnly>
}

export const TabletAndBigger = ({ children }) => {
  return <S.TabletAndBigger>{children}</S.TabletAndBigger>
}

export default {
  MobileOnly: MobileOnly,
  TabletAndBigger: TabletAndBigger,
}
