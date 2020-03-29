import React from "react";
import styled from "styled-components";
import { formatDateRange } from "../utils/date";

const Wrap = styled.div`
  background: #ffffff;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.09);
  border-radius: 4px;
`;

const ImgStab = styled.div`
  height: 100px;
  background-color: #13131b;
`;

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h3`
  margin: 0;
`;

const Text = styled.p`
  margin: 0;
`;

const LinkWrap = styled.div`
  margin-left: auto;

  > * + * {
    margin-left: 5px;
  }
`;

const LinkUnderlined = styled.a`
  display: inline-block;
  padding: 0 5px;
  font-size: 14px;
  line-height: 24px;
  color: #1890ff;

  &:hover,
  &:focus {
    text-decoration: none;
    opacity: 0.7;
  }
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 0 5px;
  text-decoration: none;
  background: #1890ff;
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  border-radius: 4px;
  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

export type Props = {
  title: string;
  date: string; // TODO: make it date
  startDate: string;
  endDate: string;
  url: string;
  ticketsUrl: string;
};

const ConferenceCard = ({
  title,
  startDate,
  endDate,
  url,
  ticketsUrl
}: Props) => {
  return (
    <Wrap>
      <ImgStab />
      <Content>
        <Heading>{title}</Heading>
        <Text>{formatDateRange(startDate, endDate)}</Text>
        <LinkWrap>
          <LinkUnderlined href={url} target="_blank" rel="noopener noreferrer">
            Visit website
          </LinkUnderlined>
          <LinkButton
            href={ticketsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy tickets
          </LinkButton>
        </LinkWrap>
      </Content>
    </Wrap>
  );
};

export default ConferenceCard;
