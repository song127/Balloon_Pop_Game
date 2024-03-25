import BasicLayout from "@components/global/layouts/BasicLayout";
import SwitchBtn from "@components/global/btns/SwitchBtn";
import SizedBox from "@components/util/SizedBox";
import { useDarkMode } from "@hooks/useDarkMode";
import GlobalStyle from "@styles/globalStyle";
import styled from "@emotion/styled";
import { FONTS, FontProps } from "@styles/globalFonts";
import COLORS from "@styles/globalColors";
import Block from "@components/util/Block";
import { useState, useEffect } from "react";
import { useDarkModeValue } from "@hooks/useDartModeValue";
import RectangleBtn from "@components/global/btns/RectangleBtn";
import BasicInput from "@components/global/inputs/BasicInput";
import Row from "@components/util/Row";
import ElasticGridLayout from "@components/global/layouts/GridLayout";
import InnerLayout from "@components/global/layouts/InnerLayout";
import useModal from "@hooks/useModal";
import { ModalType, ModalData } from "@components/provider/ModalProvider";
import { strDecode, strEncode } from "@utils/helpers";

const Text1 = styled.p<FontProps>`
  ${({ color }) => FONTS.M26.withParams({ color })}
`;

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

export default function Home() {
  const { isDarkMode, changeMode } = useDarkMode();
  const { openModal, closeModal } = useModal();

  const [isClicked, setIsClicked] = useState<boolean>(false); // 클릭 여부를 확인하여, 클릭 시에만 Pop 애니메이션이 실행되도록 함
  const [size, setSize] = useState<number>(0);
  const [sizeInput, setSizeInput] = useState<number>(0);
  const [balloons, setBalloons] = useState<boolean[][]>([]);
  const [groupCounts, setGroupCounts] = useState<number[]>([]);
  const [gameState, setGameState] = useState<number>(-1); // -1: yet 0: playing, 1: win, 2: lose

  const setGame = (
    isLoad: boolean,
    state: number,
    size: number,
    balloons: boolean[][] = []
  ) => {
    if (!isLoad) {
      for (let i = 0; i < size; i++) {
        balloons.push([]);

        for (let j = 0; j < size; j++) {
          balloons[i].push(Math.random() > 0.6);
        }
      }
    }

    setGameState(state);
    setIsClicked(false);
    setSize(size);
    setSizeInput(size);
    setBalloons(balloons);
    updateUrl(state, size, balloons);

    getPopCount(size, balloons);
  };

  const getPopCount = (size: number, balloons: boolean[][]) => {
    const visited = Array.from({ length: balloons.length }, () =>
      Array.from({ length: balloons.length }, () => false)
    );
    const newGroupCount: number[] = [];

    const search = (x: number, y: number) => {
      const queue: number[][] = [];
      let count = 0;

      queue.push([x, y]);
      visited[y][x] = true;

      while (queue.length > 0) {
        const nowInfo = queue.shift()!;
        const nowX = nowInfo[0];
        const nowY = nowInfo[1];

        count++;

        for (let i = 0; i < 4; i++) {
          const nextX = nowX + dx[i];
          const nextY = nowY + dy[i];

          if (
            nextX < 0 ||
            nextX >= size ||
            nextY < 0 ||
            nextY >= size ||
            !balloons[nextY][nextX] ||
            visited[nextY][nextX]
          ) {
            continue;
          }

          visited[nextY][nextX] = true;
          queue.push([nextX, nextY]);
        }
      }

      newGroupCount.push(count);
    };

    for (let i = 0; i < balloons.length; i++) {
      for (let j = 0; j < balloons.length; j++) {
        if (!visited[i][j] && balloons[i][j]) {
          search(j, i);
        }
      }
    }

    newGroupCount.sort((a, b) => {
      return a - b;
    });
    setGroupCounts(newGroupCount);
  };

  const updateUrl = (
    state: number,
    newSize: number,
    newBalloons: boolean[][]
  ) => {
    const url = new URL(window.location.href);
    const encodedData = strEncode(
      state.toString() +
        "/" +
        newSize.toString() +
        "/" +
        JSON.stringify(newBalloons)
    );
    url.searchParams.set("data", encodedData || "");
    window.history.pushState({}, "", url.toString());
  };

  const loadUrl = () => {
    const url = new URL(window.location.href);
    const data = url.searchParams.get("data");

    if (data) {
      const decodedData = strDecode(data);
      const [state, size, balloons] = decodedData.split("/");

      setGame(true, parseInt(state), parseInt(size), JSON.parse(balloons));
    }
  };

  const copyLink = () => {
    const url = new URL(window.location.href);
    navigator.clipboard.writeText(url.toString());
  };

  useEffect(() => {
    loadUrl();
  }, []);

  useEffect(() => {
    updateUrl(gameState, size, balloons);
  }, [balloons]);

  useEffect(() => {
    if (gameState === 1) {
      console.log("You Win!");
      const data: ModalData = {
        title: "You Win!",
        content: "You win the game!\nClick restart to play again.",
        onConfirm() {
          closeModal();
        },
        onCancel() {
          closeModal();
        },
      };

      openModal({ type: ModalType.Basic, data });
    } else if (gameState === 2) {
      console.log("You Lose!");
      const data: ModalData = {
        title: "You Lose!",
        content: "You lose the game!\nClick restart to play again.",
        onConfirm() {
          closeModal();
        },
        onCancel() {
          closeModal();
        },
      };

      openModal({ type: ModalType.Basic, data });
    }
  }, [gameState]);

  return (
    <>
      <GlobalStyle />
      <BasicLayout>
        <InnerLayout>
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
                value={sizeInput.toString()}
                setValue={(value) => setSizeInput(parseInt(value))}
              />
            </SizedBox>

            <Block w={20} />
            <SizedBox w={80} h={50}>
              <RectangleBtn
                onClick={() =>
                  setGame(false, 0, parseInt(sizeInput.toString()))
                }>
                {gameState === -1 ? "Start" : "Restart"}
              </RectangleBtn>
            </SizedBox>
          </Row>

          <Block h={20} />
          <SizedBox w={80} h={50}>
            <RectangleBtn onClick={copyLink}>Copy</RectangleBtn>
          </SizedBox>

          <Block h={20} />
          <Text1 color={useDarkModeValue(COLORS.dark_1, COLORS.white)}>
            {gameState === -1
              ? "Start the game!"
              : gameState === 0
              ? "Playing"
              : gameState === 1
              ? "You Win!"
              : "You Lose!"}
          </Text1>

          <Block h={20} />
          {balloons.length > 0 && (
            <ElasticGridLayout
              size={size}
              balloons={balloons}
              setBalloons={setBalloons}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              groupCounts={groupCounts}
              setGroupCounts={setGroupCounts}
              gameState={gameState}
              setGameState={setGameState}
            />
          )}
        </InnerLayout>
      </BasicLayout>
    </>
  );
}
