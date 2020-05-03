import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import { formatDateRange } from "../utils/date";

const Wrap = styled.div`
  background: #ffffff;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.09);
  border-radius: 4px;
`;

const Img = styled.img`
  height: 150px;
  object-fit: cover;
  width: 100%;
  background-color: #13131b;
`;

const ImgStab = styled.div`
  height: 150px;
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
  padding: 0 8px;
  font-size: 14px;
  line-height: 32px;
  color: #1890ff;

  &:hover,
  &:focus {
    text-decoration: none;
    opacity: 0.7;
  }
`;

export type Props = {
  name: string;
  date: string; // TODO: make it date
  startDate: string;
  endDate: string;
  url: string;
  ticketsUrl: string;
  image?: string | null;
};

const ConferenceCard = ({
  name,
  startDate,
  endDate,
  url,
  ticketsUrl,
  image,
}: Props) => {
  return (
    <Wrap>
      {image ? <Img src={image} /> : <ImgStab />}
      <Content>
        <Heading>{name}</Heading>
        <Text>{formatDateRange(startDate, endDate)}</Text>
        <LinkWrap>
          <LinkUnderlined href={url} target="_blank" rel="noopener noreferrer">
            Visit website
          </LinkUnderlined>
          <LinkButton href={ticketsUrl}>Buy tickets</LinkButton>
        </LinkWrap>
      </Content>
    </Wrap>
  );
};

export default ConferenceCard;
