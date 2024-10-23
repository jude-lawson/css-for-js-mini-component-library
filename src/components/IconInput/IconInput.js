import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const VARIABLE_STYLES = {
  large: {
    height: 36,
    iconSize: 24,
    fontSize: 18,
  },
  small: {
    height: 24,
    iconSize: 16,
    fontSize: 14,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const { height, iconSize, fontSize } = VARIABLE_STYLES[size];
  const inputFieldSize = width - iconSize;
  return (
    <Wrapper style={{ "--width": width + "px", "--height": height + "px" }}>
      <IconContainer style={{ "--size": iconSize + "px" }}>
        <IconWrapper id={icon} size={iconSize - 2} />
      </IconContainer>
      <Input
        type="text"
        placeholder={placeholder}
        style={{
          "--size": inputFieldSize + "px",
          "--fontSize": fontSize / 16 + "rem",
          "--iconSize": iconSize + "px",
        }}
      />
    </Wrapper>
  );
};

const Input = styled.input`
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--iconSize);
  width: var(--size);
  border: none;
  background-color: transparent;
  outline: none;
  font-size: var(--fontSize);
  font-weight: 700;
  color: ${COLORS.gray700};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const Wrapper = styled.div`
  position: relative;
  border-bottom: 1px solid ${COLORS.black};
  width: var(--width);
  height: var(--height);

  &:has(> ${Input}:focus) {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  width: var(--size);
  height: var(--size);
  top: 4px;
  bottom: 0;
  color: ${COLORS.gray700};
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
`;

export default IconInput;
