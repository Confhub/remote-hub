import React from "react";
import { GetStaticProps } from "next";
import Header from "../components/Header";
import EventList from "../components/EventList";
import conf from "../data/conferences.json";

// @ts-ignore
export default ({ conf }) => (
  <>
    <Header />
    <EventList conf={conf} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      conf
    }
  };
};
