import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Detailed from "./detailed";
import { Route, Routes } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import Show from "./components/showLoading";

const style = {
  border: "1px solid green",
  margin: 12,
  padding: 10,
};

// onclick presshandler(not needed)

function App() {
  const [dataSource, setdataSource] = useState(Array.from({ length: 20 }));
  const [data, setData] = useState(null);
  // setLoading to load the page until the data is fetched
  // const [loading, setLoading] = useState(true);
  const [showLoading, setshowLoading] = useState(false);
  // the infinite scroll component
  const [hasMore, sethasMore] = useState(true);
  const navigate = useNavigate();

  // api call and fetch data USING useEffect
  useEffect(() => {
    // const lastItemId = dataSource[dataSource.length - 1]?.id;
    setshowLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // setLoading(false);
        setTimeout(() => {
          setshowLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const navigatePage = (index) => {
    // e.preventDefault();
    navigate("/detailed", {
      state: { data: data[index], id: data[index].id },
    });

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
      {/* this is conditional rendering */}
      {/* here if the first is true then only the second would be returned  */}
      {/* else ti would return false */}
      {showLoading && <Show />}
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader=<p>Loading...</p>
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
                This is {index + 1} card
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
