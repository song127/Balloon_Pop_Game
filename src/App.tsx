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

const Title = styled.p<FontProps>`
  ${({ color }) => FONTS.M26.withParams({ color })}
`;

const TestBtn = styled.button`
  background-color: ${COLORS.dark_1};
  color: ${COLORS.white};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

function App() {
  const { isDarkMode, changeMode } = useDarkMode();
  const [encodedData, setEncodedData] = useState<string | null>("");

  const updateUrl = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("data", encodedData || "");
    window.history.pushState({}, "", url.toString());
  };

  return (
    <>
      <GlobalStyle />
      <BasicLayout>
        <Block h={20} />
        <Title color={useDarkModeValue(COLORS.dark_1, COLORS.white)}>
          Dark Mode{" "}
        </Title>
        <Block h={20} />
        <SizedBox w={100} h={50}>
          <RectangleBtn onClick={updateUrl}>
            Hello
          </RectangleBtn>
        </SizedBox>

        <Block h={20} />

        <SizedBox w={50} h={25}>
          <SwitchBtn
            isOn={isDarkMode}
            onClick={() => {
              changeMode();
            }}
          />
        </SizedBox>
      </BasicLayout>
    </>
  );
}

export default App;
