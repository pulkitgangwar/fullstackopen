import React from "react";

const StatisticLine = ({ statistics: { title, value } }) => {
  return (
    <tr>
      <th>{title}</th>
      <td>{value}</td>
    </tr>
  );
};

export default StatisticLine;
