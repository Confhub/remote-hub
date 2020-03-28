import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  background: #ffffff;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.09);
  border-radius: 4px;
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
`;

export type Props = {
  title: string;
  date: string; // TODO: make it date
  url: string;
  ticketsUrl: string;
};

const ConferenceCard = ({ title, date, url, ticketsUrl }: Props) => {
  return (
    <Wrap>
      <Heading>{title}</Heading>
      <Text>{date}</Text>
      <LinkWrap>
        <LinkUnderlined href={url} target="_blank" rel="noopener noreferrer">
          Visit website
        </LinkUnderlined>
        <LinkButton href={ticketsUrl} target="_blank" rel="noopener noreferrer">
          Buy tickets
        </LinkButton>
      </LinkWrap>
    </Wrap>
  );
};

export default ConferenceCard;
