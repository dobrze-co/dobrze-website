import styled from "styled-components"
import * as Colors from "../../theme/colors"

export const Container = styled.div`
  height: 100vh;
  background: ${Colors.Secondary};
  color: ${Colors.Primary};
  padding-left: 225px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Header = styled.h1`
  font-size: 168px;
  font-family: "Futura";
  margin: 0 0 100px;
`

export const Phones = styled.div`
  font-size: 60px;
  line-height: 72px;
  margin-bottom: 72px;
`

export const Phone = styled.div``

export const PhoneLink = styled.a`
  color: ${Colors.Primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Email = styled.a`
  font-size: 60px;
  color: ${Colors.Primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
