import styled from "@emotion/styled";
import { css } from "@emotion/react";
import COLORS from "@style/globalColor";
import { useDarkModeValue } from "@hook/useDartModeValue";
import Balloon from "@component/global/Balloon";
import { Fragment } from "react/jsx-runtime";

interface ContainerProps {
  backColor: string;
  size: number;
  state: number;
}

interface ElasticGridLayoutProps {
  size: number;
  balloons: boolean[][];
  setBalloons: (balloons: boolean[][]) => void;
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
  groupCounts: number[];
  setGroupCounts: (groupCounts: number[]) => void;
  gameState: number;
  setGameState: (gameState: number) => void;
}

const Container = styled.div<ContainerProps>`
  display: grid;
  width: 100%;
  height: max-content;

  gap: 3px;
  padding: 3px;

  ${({ backColor, size, state }) =>
    css`
      background-color: ${backColor};
      grid-template-columns: repeat(${size}, 1fr);
      /* grid-template-rows: repeat(${size}, 1fr); */
      user-select: ${state === 0 ? "all" : "none"};
    `}
`;

export default function ElasticGridLayout({
  size,
  balloons,
  setBalloons,
  isClicked,
  setIsClicked,
  groupCounts,
  setGroupCounts,
  gameState,
  setGameState,
}: ElasticGridLayoutProps) {
  const backColor = useDarkModeValue(COLORS.dark_1, COLORS.white);

  const popBalloon = (oldX: number, oldY: number) => {
    if (gameState !== 0) {
      return;
    }
    if(!balloons[oldX][oldY]) {
      return;
    }

    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];

    let count = 0;
    const newBalloons = [...balloons];

    const checkAdjacents = (newX: number, newy: number) => {
      if (
        newX < 0 ||
        newX >= size ||
        newy < 0 ||
        newy >= size ||
        !newBalloons[newX][newy]
      ) {
        return;
      }

      newBalloons[newX][newy] = false;
      count++;

      for (let i = 0; i < 4; i++) {
        checkAdjacents(newX + dx[i], newy + dy[i]);
      }
    };

    checkAdjacents(oldX, oldY);
    setIsClicked(true);
    setBalloons(newBalloons);

    if (groupCounts.length === 0) {
      return;
    } else if (count < groupCounts[groupCounts.length - 1]) {
      setGameState(2);
    } else {
      groupCounts.pop();
      const newGroupCounts = [...groupCounts];
      setGroupCounts(newGroupCounts);

      if (newGroupCounts.length === 0) {
        setGameState(1);
      }
    }
  };

  return (
    <Container backColor={backColor} size={size} state={gameState}>
      {balloons.map((item, index) => (
        <Fragment key={index}>
          {item.map((subItem, subIndex) => (
            <Balloon
              key={index + subIndex}
              isVisible={subItem}
              onClick={() => {
                popBalloon(index, subIndex);
              }}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
          ))}
        </Fragment>
      ))}
    </Container>
  );
}
