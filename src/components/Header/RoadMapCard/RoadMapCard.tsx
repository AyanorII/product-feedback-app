import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../../Card/Card";
import RoadMapCardHeader from "./RoadMapCardHeader";
import RoadMapCardStatus from "./RoadMapCardStatus";

const RoadMapCard = () => {
  return (
    <Card>
      <>
        <RoadMapCardHeader />
        <RoadMapCardStatus />
      </>
    </Card>
  );
};

export default RoadMapCard;
