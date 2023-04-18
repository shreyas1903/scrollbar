import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Detailed from "./detailed";
import { Route, Routes } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

const style = {
  border: "1px solid green",
  margin: 12,
  padding: 10,
};

// onclick presshandler

function App() {
  const [dataSource, setdataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, sethasMore] = useState(true);
  const navigate = useNavigate();

  // useeffect
  useEffect(() => {
    return () => {};
  });

  // api call and fetch data
  const fetchDetails = async (e) => {
    const url_detail =
      "https://jsonplaceholder.typicode.com/todos/${e.target.id}";
    const response = await fetch(url_detail);
    const details = await response.json();
    console.log(details);
    setdataSource(details);
  };
  const navigatePage = (index) => {
    // e.preventDefault();
    navigate("/detailed", { state: { index: index } });
    // alert("hiii");
  };
  // fetch data
  const fetchMoreData = () => {
    if (dataSource.length < 100) {
      setTimeout(() => {
        setdataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 1000);
    } else {
      sethasMore(false);
    }
  };
  return (
    <div className="App">
      <h2>scrollBar</h2>
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader=<p>loading...</p>
        endMessage={<p>You are all set</p>}
      >
        {dataSource.map((item, index) => {
          return (
            <div key={index}>
              {/* <Link to={"/detailed"}> */}
              {/* <div style={style} onClick={useNavigate("/detailed")}> */}
              <button
                className="button"
                type="button"
                onClick={() => navigatePage(index)}

                // key={index}
              >
                This is {index} card
              </button>
              {/* // </div> */}
              {/* </Link> */}
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default App;
