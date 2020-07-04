import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = () => {
  const Card = styled.div`
    margin: 10px auto;
    background: linear-gradient(to top, blue, lightblue);
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
  `;
  return (
    <Card>
      <Location />
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;
