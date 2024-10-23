import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectField value={value} onChange={onChange}>
        {children}
      </SelectField>
      <VisualInput>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <DropdownArrow id="chevron-down" size={24} strokeWidth={1} />
        </IconWrapper>
      </VisualInput>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  font-size: ${16 / 16}rem;
`;

const SelectField = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const VisualInput = styled.div`
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 52px;
  border-radius: 8px;

  ${SelectField}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${SelectField}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  width: var(--size);
  height: var(--size);
  margin: auto;
  pointer-events: none;
`;

const DropdownArrow = styled(Icon)`
  color: ${COLORS.gray700};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export default Select;
