import { keyframes } from "@emotion/react";

export const PopFrame = keyframes`
  0% {
    width: 10%;
    height: 10%;

    opacity: 0.2;
  }
  100% {
    width: 90%;
    height: 90%;

    opacity: 1;
  }
`;

export const FadeOutFrame = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;