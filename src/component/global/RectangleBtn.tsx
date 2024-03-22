import styled from "@emotion/styled";
import { css } from "@emotion/react";

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

  transition: all 0.2s ease-in-out;

  ${({ disabled, round }) => css`
    cursor: ${disabled ? "auto" : "pointer"};
    border-radius: ${round};
  `}

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    ${({ disabled, round }) => css`
      border-radius: ${round};
      background-color: ${disabled ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0)"};
    `}
  }
`;
function RectangleBtn({
  onClick,
  active = true,
  round = "0px",
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
