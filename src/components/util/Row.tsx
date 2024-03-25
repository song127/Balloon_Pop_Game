import { LayerAlign } from "@components/util/WidgetUtils";

/**
 * 가로 배치를 쉽게하는 커스텀 컴포넌트
 */
function Row({
    flex = "",
    main = LayerAlign.center,
    cross = LayerAlign.center,
    fullWidth = false,
    fullHeight = false,
    wrap = false,
    gap = 0,
    ...props
}) {
    return (
        <div
            style={{
                flex,
                display: "flex",
                flexDirection: "row",
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

export default Row;
