import { createGlobalStyle } from "styled-components";

import SongMyung from "../styles/fonts/SongMyung-Regular.woff";
import Noto from "../styles/fonts/NotoSansKR-Thin.woff";
import OrelegaOne from "../styles/fonts/OrelegaOne-Regular.woff";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'NOTO Sans KR Thin';
    src: url(${Noto}) format('woff');
  } 

  @font-face {
    font-family: 'SongMyung';
    src: url(${SongMyung}) format('woff');
  } // NOTE: 테스트용 확 티나는(?) 폰트

  @font-face {
    font-family: 'OrelegaOne';
    src: url(${OrelegaOne}) format('woff');
  }
`;

export default GlobalFonts;
