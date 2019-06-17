import React from "react";
import Row from "./Row";
export default function Results({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Url Content</th>
          <th>Url Target</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <Row
            key={item._id}
            urlCurrent={item.urlCurrent}
            urlTarget={item.urlTarget}
          />
        ))}
      </tbody>
    </table>
  );
}
