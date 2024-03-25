import COLORS from "@styles/globalColors";

class CustomFont {
  [key: string]: any;
  constructor(
    public size: number,
    public color: any,
    public weight: number,
    public height: string,
    public align: string
  ) {}

  withParams({
    size = this.size,
    color = this.color,
    height = this.height,
    weight = this.weight,
    align = this.align,
  }) {
    this.size = size;
    this.color = color;
    this.height = height;
    this.weight = weight;
    this.align = align;

    return `
      font-size: ${this.size}px;
      color: ${this.color};
      line-height: ${this.height};
      font-weight: ${this.weight};
      text-align: ${this.align};
    `;
  }

  valueOf() {
    return `
      font-size: ${this.size}px;
      color: ${this.color};
      line-height: ${this.height};
      font-weight: ${this.weight};
      text-align: ${this.align};
    `;
  }

  toString() {
    return this.valueOf();
  }

  __emotion_styles() {
    return this.valueOf();
  }
}

const Font = ({
  size = 16,
  color = COLORS.black,
  height = "1.1",
  weight = 400,
  align = "start",
}): CustomFont => {
  const font = new CustomFont(size, color, weight, height, align);

  return font;
};

export interface FontProps {
  size?: number;
  color?: string;
  height?: string;
  weight?: number;
  align?: string;
}

export const FONTS = {
  SB50: Font({ size: 50, weight: 600 }),
  SB24: Font({ size: 24, weight: 600 }),
  SB16: Font({ size: 16, weight: 600 }),
  M48: Font({ size: 48, weight: 500 }),
  M26: Font({ size: 26, weight: 500 }),
  M16: Font({ size: 16, weight: 500 }),
  M14: Font({ size: 14, weight: 500 }),
  M12: Font({ size: 12, weight: 500 }),
  R16: Font({ size: 16, weight: 400 }),
  R14: Font({ size: 14, weight: 400 }),
};
