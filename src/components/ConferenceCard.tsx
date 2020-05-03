import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";
import { formatDateRange } from "../utils/date";

const Wrap = styled.div`
  position: relative;
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

const Tag = styled.div`
  position: absolute;
  right: 1em;
  top: 1em;
  padding: 0.25em;
  background-color: #237804;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 0 0 3px #000;
`;

export type Props = {
  name: string;
  date: string; // TODO: make it date
  startDate: string;
  endDate: string;
  url: string;
  ticketsUrl?: string | null;
  image?: string | null;
  type: "paid" | "free";
};

const ConferenceCard = ({
  name,
  startDate,
  endDate,
  url,
  ticketsUrl,
  image,
  type,
}: Props) => {
  const isFree = type === "free";

  return (
    <Wrap>
      {isFree && <Tag>free</Tag>}
      {image ? <Img src={image} /> : <ImgStab />}
      <Content>
        <Heading>{name}</Heading>
        <Text>{formatDateRange(startDate, endDate)}</Text>
        <LinkWrap>
          <LinkUnderlined href={url} target="_blank" rel="noopener noreferrer">
            Visit website
          </LinkUnderlined>
          {ticketsUrl && (
            <LinkButton href={ticketsUrl}>
              {isFree ? "Get" : "Buy"} tickets
            </LinkButton>
          )}
        </LinkWrap>
      </Content>
    </Wrap>
  );
};

export default ConferenceCard;
