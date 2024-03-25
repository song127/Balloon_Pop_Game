import styled from "@emotion/styled";
import ModalWrapper from "@components/global/modals/widgets/ModalWrapper";
import COLORS from "@styles/globalColors";
import { FadeInKf, TopToBottomKf } from "@utils/animations";
import { useEffect, useRef } from "react";
import useModal from "@hooks/useModal";
import { FONTS } from "@styles/globalFonts";
import Block from "@components/util/Block";
import RectangleBtn from "@components/global/btns/RectangleBtn";
import SizedBox from "@components/util/SizedBox";
import { strToEnterComponents } from "@utils/helpers";
import CloseSvg from "@assets/icons/ic-close.svg?react";

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: max-content;

  background-color: ${COLORS.white};
  border-radius: 10px;
  padding: 20px;

  overflow: hidden;

  animation: ${TopToBottomKf} 0.3s ease-in-out, ${FadeInKf} 0.3s ease-in-out;
`;

const Title = styled.p`
  ${FONTS.M26}
  color: ${COLORS.dark_1};
`;

const Content = styled.p`
  ${FONTS.M16.withParams({ color: COLORS.dark_1,  height: "1.3"})}
  color: ${COLORS.dark_1};

  text-align: center;
`;

const CloseIcon = styled(CloseSvg)`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 20px;
  height: 20px;

  cursor: pointer;
`;

export default function BasicModal() {
  const { closeModal, data } = useModal();
  const innerRef = useRef<any>();

  useEffect(() => {
    const handler = (e: Event) => {
      if (innerRef.current && !innerRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler); // 모바일 대응

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler); // 모바일 대응
    };
  });

  return (
    <ModalWrapper>
      <Container ref={innerRef}>
        <CloseIcon onClick={closeModal} />

        <Title>{data.title}</Title>

        <Block h={20} />
        <Content>{strToEnterComponents(data.content)}</Content>

        <Block h={20} />
        <SizedBox w={100} h={40}>
          <RectangleBtn onClick={data.onConfirm}>Confirm</RectangleBtn>
        </SizedBox>
      </Container>
    </ModalWrapper>
  );
}
