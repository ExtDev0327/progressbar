import React from "react";
import PropTypes from "prop-types";

const ProgressBar = props => {
  const {
    bgcolor,
    completed,
    baseBgColor,
    height,
    width,
    margin,
    padding,
    borderRadius,
    labelAlignment,
    labelColor,
    labelSize
  } = props;

  const getAlignment = alignmentOption => {
    if (alignmentOption === "left") {
      return "flex-start";
    } else if (alignmentOption === "center") {
      return "center";
    } else if (alignmentOption === "right") {
      return "flex-end";
    }
  };

  const alignment = getAlignment(labelAlignment);

  const containerStyles = {
    height: height,
    backgroundColor: baseBgColor,
    borderRadius: borderRadius,
    padding: padding,
    width: width,
    margin: margin
  };

  const fillerStyles = {
    height: height,
    width: isNaN(completed) || completed > 100 ? `100%` : `${completed}%`,
    backgroundColor: bgcolor,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: labelAlignment !== "outside" && alignment
  };

  const labelStyles = {
    padding: labelAlignment === "outside" ? "0 0 0 5px" : "0 5px 0 0",
    color: labelColor,
    fontWeight: "bold",
    fontSize: labelSize
  };

  const outsideStyles = {
    display: labelAlignment === "outside" && "flex",
    alignItems: labelAlignment === "outside" && "center"
  };

  return (
    <div style={outsideStyles}>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          {labelAlignment !== "outside" && (
            <span style={labelStyles}>
              {!isNaN(completed) ? `${completed}%` : `${completed}`}
            </span>
          )}
        </div>
      </div>
      {labelAlignment === "outside" && (
        <span style={labelStyles}>
          {!isNaN(completed) ? `${completed}%` : `${completed}`}
        </span>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  completed: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  bgcolor: PropTypes.string,
  baseBgColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  labelAlignment: PropTypes.oneOf(["left", "center", "right", "outside"]),
  labelColor: PropTypes.string,
  labelSize: PropTypes.string
};

ProgressBar.defaultProps = {
  bgcolor: "#6a1b9a",
  height: "20px",
  width: "100%",
  borderRadius: "50px",
  labelAlignment: "right",
  baseBgColor: "#e0e0de",
  labelColor: "#fff",
  labelSize: "15px"
};

export default ProgressBar;
