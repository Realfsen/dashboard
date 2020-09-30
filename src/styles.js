// let baseWidth = 15;
let baseHeight = 12.5;
let backgroundColor = "#292929";
let textColor = "#d6d6d6";

// For FontAwesome icons
let svg = {
  margin: "auto",
  fontSize: "40pt",
};

export const singleBoxStyle = {
  backgroundColor: backgroundColor,
  color: textColor,
  width: "100%",
//   width: baseWidth + "rem",
  height: baseHeight + "rem",
  position: "relative",
  display: "grid",
  gridTemplateRows: "33% 67%",
  textAlign: "center",
  fontSize: "20pt",
  margin: "auto",
  svg: svg,
};

export const doubleBoxStyle = {
  backgroundColor: backgroundColor,
  color: textColor,
  // width: baseWidth*1.5+'rem',
  width: "100%",
  height: baseHeight + "rem",
  position: "relative",
  display: "grid",
  gridTemplateRows: "33% 67%",
  textAlign: "center",
  fontSize: "20pt",
  margin: "auto",
  svg: svg,
};

export const containerStyle = {
  display: "grid",
  padding: "4rem",
  width: "80%",
  margin: "auto",
  gridGap: "2rem",
  gridTemplateColumns: "25.75% 13% 13% 13% 25.75%",
  //   gridTemplateColumns: 'repeat(auto-fit, minmax(18.5rem, 1fr))'
};
