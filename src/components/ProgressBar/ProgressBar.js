/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size, label }) => {
  return (
    <>
      <VisuallyHidden as="label" htmlFor={label} />
      <Wrapper id={label} size={size} value={value} max="100" />
    </>
  );
};

const calculateInnerBorderRadius = (props) => {
  const { value } = props;
  const baseRadius = "4px";

  const conditionalRadius = Number(value) >= 99 ? baseRadius : "0px";
  return `${baseRadius} ${conditionalRadius} ${conditionalRadius} ${baseRadius}`;
};

const calculateOuterBorderRadius = (props) => {
  const { size } = props;
  let radius;
  switch (size) {
    case "large":
      radius = "8px";
      break;
    case "small":
    case "medium":
    default:
      radius = "4px";
  }

  return `${radius}`;
};

const calculateHeight = (props) => {
  switch (props.size) {
    case "large":
      return "24px;";
    case "small":
      return "8px;";
    case "medium":
    default:
      return "12px";
  }
};

const Wrapper = styled.progress`
  -webkit-appearance: none;
  appearance: none;

  &[value] {
    --inner-border-radius: ${(props) => calculateInnerBorderRadius(props)};
    --outer-border-radius: ${(props) => calculateOuterBorderRadius(props)};

    min-width: 370px;
    height: ${(props) => calculateHeight(props)};
  }

  &[value]::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--outer-border-radius);
    box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
    padding: ${(props) => props.size === "large" && "4px"};
  }

  &[value]::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: var(--inner-border-radius);
  }

  /* This vendor style selector and &[value]::-webkit-progress-value
   * and &[value]::-webkit-progress-bar
   * cannot be styled together or it will break both browsers.
   */
  &[value]::-moz-progress-bar {
    background-color: ${COLORS.primary};
    border-radius: var(--inner-border-radius);
  }
`;

export default ProgressBar;
