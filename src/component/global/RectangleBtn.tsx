import styled from "@emotion/styled";
import { css } from "@emotion/react";
import COLORS from "@style/globalColor";
import { FONTS } from "@style/globalFonts";

interface ContainerProps {
  disabled: boolean;
  round: string;
}

interface RectangleBtnProps {
  onClick: () => void;
  active?: boolean;
  round?: string;
  children: React.ReactNode;
}

const Container = styled.button<ContainerProps>`
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: ${COLORS.blue_1};

  ${FONTS.M14.withParams({ color: COLORS.white })}

  transition: all 0.2s ease-in-out;

  ${({ disabled, round }) => css`
    cursor: ${disabled ? "auto" : "pointer"};
    border-radius: ${round};
  `}
`;

function RectangleBtn({
  onClick,
  active = true,
  round = "8px",
  ...props
}: RectangleBtnProps) {
  return (
    <Container
      onClick={onClick}
      disabled={!active}
      round={round}>
      {props.children}
    </Container>
  );
}

export default RectangleBtn;
