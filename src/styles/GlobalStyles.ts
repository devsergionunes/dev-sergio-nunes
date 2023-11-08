/* eslint-disable import/no-extraneous-dependencies */
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  // Reset CSS
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Default
  @media screen {
      @media (max-width: 1024px) {
          html {
              font-size: 75.5%;
          }
      }
  }

  *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 12px;
    background-color: #F4F4F4;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #dad7d7;
    border-radius: 12px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #c2bdbd;
  }
`;
