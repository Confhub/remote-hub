import * as React from "react";
import styled from "styled-components";

const StyledLinkButton = styled.a`
  display: inline-block;
  padding: 0 8px;
  text-decoration: none;
  background: #1890ff;
  color: #fff;
  font-size: 14px;
  line-height: 32px;
  border-radius: 4px;
  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

type Props = {
  href: string;
  size?: "normal" | "large";
};

const LinkButton: React.FC<Props> = ({ children, href }) => {
  return (
    <StyledLinkButton href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledLinkButton>
  );
};

LinkButton.defaultProps = {
  size: "normal",
};

export default LinkButton;
