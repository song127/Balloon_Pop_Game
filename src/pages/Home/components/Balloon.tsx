import styled from "@emotion/styled";
import COLORS from "@styles/globalColors";
import { useDarkMode } from "@hooks/useDarkMode";
import { useDarkModeValue } from "@hooks/useDartModeValue";
import BalloonSvg from "@assets/icons/ic-balloon.svg?react";
import PopSvg from "@assets/icons/ic-pop.svg?react";
import { useEffect, useState } from "react";
import { FadeOutKf, PopKf } from "@utils/animations";

interface ItemProps {
  isDarkMode: boolean;
}

interface BalloonProps {
  key: number;
  isVisible: boolean;
  onClick: () => void;
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;
}

const Container = styled.div<ItemProps>`
  cursor: pointer;
  aspect-ratio: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? COLORS.dark_1 : COLORS.white};

&:hover {
    .balloon-valid {
      width: 50%;
      height: 50%;
    }
  }
`;

const BalloonIcon = styled(BalloonSvg)<{ svgcolor: string }>`
  width: 70%;
  height: 70%;

  path {
    stroke: ${({ svgcolor }) => svgcolor};
  }
`;

const PopIcon = styled(PopSvg)<{ svgcolor: string }>`
  width: 70%;
  height: 70%;

  path {
    stroke: ${({ svgcolor }) => svgcolor};
  }

  animation: ${PopKf} 0.3s forwards, ${FadeOutKf} 1s 0.8s forwards;
`;

export default function Balloon({
  isVisible = false,
  onClick,
  isClicked,
  ...props
}: BalloonProps) {
  const [poped, setPoped] = useState<boolean>(false);
  const { isDarkMode } = useDarkMode();
  const svgColor = useDarkModeValue(COLORS.dark_1, COLORS.white);

  useEffect(() => {
    if (isClicked) {
      if (!isVisible) {
        setPoped(true);
        setTimeout(() => {
          setPoped(false);
        }, 2000);
      }
    }
  }, [isVisible]);

  return (
    <Container isDarkMode={isDarkMode} key={props.key} onClick={onClick}>
      {isVisible ? (
        <BalloonIcon className={"balloon-valid"} svgcolor={svgColor} />
      ) : (
        poped && <PopIcon svgcolor={svgColor} />
      )}
    </Container>
  );
}
