import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

const style = {
  border: "1px solid green",
  margin: 12,
  padding: 10,
};

// onclick presshandler
const pressHandler = (index) => {
  <Routes>
    <Route path="/#">dummy page</Route>
  </Routes>;
};
const isItCorrect = () => {};

function App() {
  const [dataSource, setdataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, sethasMore] = useState(true);
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
            <Link to={"/user/details"}>
              <div style={style} key={index}>
                <div>This is #{index + 1} card</div>
              </div>
            </Link>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default App;
