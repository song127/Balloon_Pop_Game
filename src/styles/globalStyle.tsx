import { Global, css } from "@emotion/react";
import reset from "@styles/reset";
import COLORS from "@styles/globalColor";

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
