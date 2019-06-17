import React from "react";

export default function Row({ urlCurrent, urlTarget }) {
  return (
    <tr>
      <td>{urlCurrent}</td>
      <td>{urlTarget}</td>
    </tr>
  );
}
