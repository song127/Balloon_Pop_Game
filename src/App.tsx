import BasicLayout from "@component/global/BasicLayout";
import SwitchBtn from "@component/global/SwitchBtn";
import SizedBox from "@component/util/SizedBox";
import { useDarkMode } from "@hook/useDarkMode";
import GlobalStyle from "@style/globalStyle";
import styled from "@emotion/styled";
import { FONTS, FontProps } from "@style/globalFonts";
import COLORS from "@style/globalColor";
import Block from "@component/util/Block";
import { useState } from "react";
import { useDarkModeValue } from "./hook/useDartModeValue";
import RectangleBtn from "@component/global/RectangleBtn";
import BasicInput from "@component/global/BasicInput";
import Row from "@component/util/Row";
import { strDecode, strEncode } from "@util/helpers";

const Text1 = styled.p<FontProps>`
  ${({ color }) => FONTS.M26.withParams({ color })}
`;

function App() {
  const { isDarkMode, changeMode } = useDarkMode();
  const [size, setSize] = useState<number>(0);

  const updateUrl = () => {
    const url = new URL(window.location.href);
    const encodedData = strEncode(size.toString() + "-hello");
    console.log(strDecode(encodedData));
    url.searchParams.set("data", encodedData || "");
    window.history.pushState({}, "", url.toString());
  };

  return (
    <>
      <GlobalStyle />
      <BasicLayout>
        <Block h={20} />
        <Row>
          <Text1 color={useDarkModeValue(COLORS.dark_1, COLORS.white)}>
            Dark Mode{" "}
          </Text1>

          <Block w={20} />
          <SizedBox w={50} h={25}>
            <SwitchBtn
              isOn={isDarkMode}
              onClick={() => {
                changeMode();
              }}
            />
          </SizedBox>
        </Row>

        <Block h={20} />
        <Row>
          <SizedBox w={110} h={50}>
            <BasicInput
              type="number"
              value={size.toString()}
              setValue={(value) => setSize(parseInt(value))}
            />
          </SizedBox>

          <Block w={20} />
          <SizedBox w={80} h={50}>
            <RectangleBtn onClick={updateUrl}>Set!</RectangleBtn>
          </SizedBox>
        </Row>
      </BasicLayout>
    </>
  );
}

export default App;
