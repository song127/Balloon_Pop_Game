import styled from "@emotion/styled";
import COLORS from "@styles/globalColor";

interface BackboardProps {
  round: string;
}

interface BasicInputProps {
  type?: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  round?: string;
}

const Backboard = styled.div<BackboardProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: ${COLORS.gray_2};

  border-radius: ${(props) => props.round};
`;

const Input = styled.input`
  border-radius: 50px;

  width: 100%;
  height: 100%;

  padding: 0 16px;

  color: ${COLORS.dark_1};

  &::placeholder {
    color: ${COLORS.gray_1};
  }
`;

function BasicInput({
  type = "text",
  value,
  setValue,
  placeholder = "Basic Input",
  round = "8px",
}: BasicInputProps) {
  return (
    <Backboard round={round}>
      <Input
        value={value}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </Backboard>
  );
}

export default BasicInput;
