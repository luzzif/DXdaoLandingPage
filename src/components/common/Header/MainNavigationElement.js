import React, { useState } from "react";
import styled from "styled-components";
import NavTooltip from "./NavTooltip";
import { Link } from "react-router-dom";

const MainNavigationElement = (props) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const { linkData } = props;

  return (
    <StyledMainNavigationElement
      key={linkData.name}
      className={`
                ${
                  linkData.tooltip && "tooltip-link-wrapper"
                } main-navigation-element`}
      onMouseEnter={() => {
        setIsTooltipVisible(!isTooltipVisible);
      }}
      onMouseLeave={() => {
        setIsTooltipVisible(!isTooltipVisible);
      }}
    >
      {linkData.external || linkData.tooltip ? (
        <a
          target={linkData.external && "_blank"}
          className={linkData.tooltip && "tooltip-link"}
          href={linkData.href && linkData.href}
        >
          {linkData.name}
        </a>
      ) : (
        <Link className={linkData.tooltip && "tooltip-link"} to={linkData.href}>
          {linkData.name}
        </Link>
      )}
      {linkData.tooltip && (
        <NavTooltip
          tooltipData={linkData.tooltip}
          isVisible={isTooltipVisible}
        />
      )}
    </StyledMainNavigationElement>
  );
};

const StyledMainNavigationElement = styled.section`
  margin-right: 32px;
  line-height: 27px;
  font-size: 16px;
  font-weight: 200;
  a {
    cursor: pointer;
    color: #e5e5e5;
    transition: 0.35s ease-in-out color;
    &:hover {
      color: #b8bee5;
    }
    &.tooltip-link {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: calc(100% + 24px);
        height: calc(100% + 56px);
        /* border: 1px solid blue; */
        top: -28px;
        left: -12px;
      }
    }
  }
`;

export default MainNavigationElement;
