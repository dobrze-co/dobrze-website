import styled from "styled-components"
import * as Colors from "../../theme/colors"

export const Container = styled.div`
  display: inline-block;
  position: relative;

  a {
    text-decoration: none;
    font-family: "Futura";
    color: ${Colors.Primary};
    line-height: 30px;
    font-size: 24px;
    cursor: pointer;
  }

  a:before {
    content: "";
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 30px;
    margin-right: 8px;
    background: ${Colors.Secondary};
    border-radius: 50%;
    transition: background 100ms ease-in-out;
  }

  a:hover:before {
    background: ${Colors.Accent};
  }

  a:hover:after {
    content: "";
    position: absolute;
    bottom: -1%;
    left: 38px;
    right: 0;
    height: 2px;
    background: ${Colors.Primary};
  }
`
