import React, { useState, useEffect } from "react";
import "./App.css";
import Results from "./Results";
// import Row from "./Row";

const getDataFromServer = async function(endpoint) {
  let data = fetch(endpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response;
    })
    .then(response => response.json());

  return await data;
};
function App() {
  // // const [, set] = useState();

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let endpoint = "/data.json";
    getDataFromServer(endpoint).then(data => {
      setData(data);
      setFilteredData(filteredData);
    });
  }, []);
  // console.log(data);
  return (
    <div className="App container">
      <Results data={data} />
    </div>
  );
}

export default App;
