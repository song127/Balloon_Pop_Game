interface SizedBoxProps {
  w?: number | string;
  h?: number | string;
  flex?: string;
  children: React.ReactNode;
}

function SizedBox({
  w = "max-content",
  h = "max-content",
  flex = "",
  children
}: SizedBoxProps) {
  let width;
  if (typeof w === "number") {
    width = `${w}px`;
  } else {
    width = w;
  }
  let height;
  if (typeof h === "number") {
    height = `${h}px`;
  } else {
    height = h;
  }

  return (
    <div
      style={{ display: "flex", width: `${width}`, height: `${height}`, flex }}>
      {children}
    </div>
  );
}

export default SizedBox;
