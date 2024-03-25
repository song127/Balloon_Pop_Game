import { keyframes } from "@emotion/react";

export const PopKf = keyframes`
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

export const TopToBottomKf = keyframes`
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const FadeInKf = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

export const FadeOutKf = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
