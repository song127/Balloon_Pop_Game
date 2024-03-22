import { LayerAlign } from "@component/util/WidgetUtils";

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
