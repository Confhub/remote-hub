import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #13131b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 125px 50px;
`;

const Heading = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 900;
  font-size: 60px;
`;

const Text = styled.p`
  margin: 0;
  color: #fff;
  font-size: 26px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Heading>Tech events around the world</Heading>
      <Text>Join the community and find tech events all over the world</Text>
    </StyledHeader>
  );
};

export default Header;
