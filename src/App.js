import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

const style = {
  border: "1px solid green",
  margin: 12,
  padding: 10,
};

function App() {
  const [dataSource, setdataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, sethasMore] = useState(true);
  const fetchMoreData = () => {
    if (dataSource.length < 200) {
      setTimeout(() => {
        setdataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 500);
    } else {
      sethasMore(false);
    }
  };
  return (
    <div className="App">
      <p>scrollBar</p>
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader=<p>loading...</p>
        endMessage={<p>You are all set</p>}
        height={200}
      >
        {dataSource.map((item, index) => {
          return (
            <div style={style} key={index}>
              <div>This is a div #{index + 1} card</div>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default App;
