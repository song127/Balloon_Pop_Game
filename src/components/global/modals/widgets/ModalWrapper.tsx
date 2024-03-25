import styled from "@emotion/styled";
import { FadeInKf } from "@utils/animations";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  z-index: 1000;
  overflow: hidden;

  animation: ${FadeInKf} 0.3s ease-in-out;
`;

function ModalWrapper({ ...props }) {
  return <Container {...props}>{props.children}</Container>;
}

export default ModalWrapper;
