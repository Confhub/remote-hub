import React from "react";
import styled from "styled-components";
import ConferenceCard, { Props as Conference } from "./ConferenceCard";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin: 55px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
`;

type Props = {
  conf: Conference[];
};

const EventList = ({ conf }: Props) => {
  return (
    <List>
      {conf.map((c, idx) => (
        <li key={idx}>
          <ConferenceCard
            title={c.title}
            date={c.date}
            url={c.url}
            ticketsUrl={c.ticketsUrl}
          />
        </li>
      ))}
    </List>
  );
};

export default EventList;
