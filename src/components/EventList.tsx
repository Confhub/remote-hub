import React from "react";
import styled from "styled-components";
import { getMonth } from "date-fns";
import ConferenceCard, { Props as Conference } from "./ConferenceCard";

const Container = styled.div`
  margin: 55px;
`;

const Heading = styled.h3`
  font-size: 32px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
`;

type Props = {
  conf: Conference[];
};

const MONTH_LIST = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const EventList = ({ conf }: Props) => {
  const list = conf.reduce<Conference[][]>((acc, c) => {
    const month = getMonth(new Date(c.startDate));
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(c);

    return acc;
  }, []);

  return (
    <Container>
      {list.map((item, idx) => (
        <>
          <Heading>{MONTH_LIST[idx]} 2019</Heading>
          <List>
            {item.map((c, idx) => (
              <li key={idx}>
                <ConferenceCard {...c} />
              </li>
            ))}
          </List>
        </>
      ))}
    </Container>
  );
};

export default EventList;
