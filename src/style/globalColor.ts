class CustomColor {
  hex = "#000000";

  constructor(hex = "#000000") {
    this.hex = hex;
  }

  withOpacity(opacity = 1) {
    const [r, g, b] = this.hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${opacity})`;
  }

  valueOf() {
    return this.hex;
  }

  toString() {
    return this.hex;
  }

  __emotion_styles() {
    return this.hex;
  }
}

const Color = function (hex = "#000000"): any {
  const color = new CustomColor(hex);
  return color;
};

const COLORS = {
  white: Color("#ffffff"),
  black: Color("#000000"),

  dark_1: Color("#2a2a2a"),
  dark_2: Color("#3a3a3a"),
  dark_3: Color("#4a4a4a"),

  gray_1: Color("#9292AA"),
  gray_2: Color("#F6F7FC"),
};

export default COLORS;
