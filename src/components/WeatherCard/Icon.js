import React from "react";
import styled from "@emotion/styled";

const Icon = () => {
  const Icon = styled.img`
    width: 40%;
  `;
  return (
    <Icon
      className="icon"
      src="https://images.vexels.com/media/users/3/135675/isolated/preview/16f4c29c562be3910fca66d182d42f04-blue-cloud-weather-icon-by-vexels.png"
      alt="Weather Card"
    />
  );
};

export default Icon;
