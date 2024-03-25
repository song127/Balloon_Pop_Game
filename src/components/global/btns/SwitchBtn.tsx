import { css } from "@emotion/react";
import styled from "@emotion/styled";
import COLORS from "@styles/globalColors";

interface ContainerProps {
  backColor: string;
  isOn: boolean;
}

interface CircleProps {
  circleColor: string;
  isOn: boolean;
}

interface SwitchBtnProps {
  backColor?: string;
  circleColor?: string;
  disabled?: boolean;
  isOn: boolean;
  onClick?: any;
}

const Container = styled.button<ContainerProps>`
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 4px;

  border-radius: 180px;

  ${({ isOn, backColor }) => css`
    background-color: ${isOn ? backColor : "grey"};
  `}

  transition: all 0.2s ease-in-out;
`;

const Circle = styled.div<CircleProps>`
  position: relative;

  width: 18px;
  height: 18px;
  border-radius: 100%;

  ${({ isOn, circleColor }) => css`
    background-color: ${circleColor};
    ${isOn && "transform: translateX(24px)"};
  `}

  transition: all 0.2s ease-in-out;
`;

function SwitchBtn({
  backColor = COLORS.black,
  circleColor = "white",
  disabled = false,
  isOn = false,
  onClick,
}: SwitchBtnProps) {
  return (
    <Container
      disabled={disabled}
      isOn={isOn}
      backColor={backColor}
      onClick={onClick}>
      <Circle isOn={isOn} circleColor={circleColor} />
    </Container>
  );
}

export default SwitchBtn;
