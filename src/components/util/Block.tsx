interface BlockProps {
  w?: number | string;
  h?: number | string;
}

function Block({ w = 0, h = 0 }: BlockProps) {
  return (
    <div
      style={{
        display: "flex",
        marginRight: `${typeof w === "number" ? `${w}px` : w}`,
        marginTop: `${typeof h === "number" ? `${h}px` : h}`,
      }}>
    </div>
  );
}

export default Block;
