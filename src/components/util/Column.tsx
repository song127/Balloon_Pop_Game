import { LayerAlign } from "@components/util/WidgetUtils";

/**
 * 세로 배치를 쉽게하는 커스텀 컴포넌트
 */
function Column({
  main = LayerAlign.center,
  cross = LayerAlign.center,
  fullWidth = false,
  fullHeight = false,
  flex = "",
  wrap = false,
  gap = 0,
  ...props
}) {
  return (
    <div
      style={{
        display: "flex",
        flex,
        flexDirection: "column",
        justifyContent: main,
        alignItems: cross,
        width: fullWidth ? "100%" : "max-content",
        height: fullHeight ? "100%" : "max-content",
        flexWrap: wrap ? "wrap" : "nowrap",
        gap,
      }}>
      {props.children}
    </div>
  );
}

export default Column;
