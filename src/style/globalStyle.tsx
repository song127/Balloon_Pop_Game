import { Global, css } from "@emotion/react";
import reset from "@style/reset";
import COLORS from "@style/globalColor";

const initCss = css`
  ${reset}
  * {
    font-family: "Pretendard", sans-serif;
    color: ${COLORS.black};
  }
`;

const GlobalStyle = () => {
  return <Global styles={initCss} />;
};

export default GlobalStyle;
