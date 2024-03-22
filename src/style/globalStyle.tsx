import { Global, css } from "@emotion/react";
import reset from "@style/reset";
import COLORS from "@style/globalColor";

const initCss = css`
  ${reset}
  * {
    transition: all 0.3s;
    font-family: "Pretendard", sans-serif;
    color: ${COLORS.black};
  }
`;

const GlobalStyle = () => {
  return <Global styles={initCss} />;
};

export default GlobalStyle;
