import "./Home.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";

const Home = () => {
  const [search, setSearch] = useState("");
  const [d, setD] = useState([]);

  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);

  const searchData = async (title) => {
    const response = await fetch(
      `https://api.spacexdata.com/v3/capsules?s=${title}`
    );
    const data = await response.json();
    setD(data.Search);
  };

  const handleKey = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      searchData(search);
    }
  };

  return (
    <div className="Div">
      <div className="search">
        <h2>Search Form</h2>
        <div className="search1">
          <input
            type="text"
            placeholder="Input Placeholder"
            className="input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
          {/* <input
            type="text"
            placeholder="Input Placeholder"
            className="input"
          />
          <input
            type="text"
            placeholder="Input Placeholder"
            className="input"
          /> */}
          <input
            type="button"
            value="Search"
            className="input search"
            onClick={() => searchData(search)}
          />
        </div>
      </div>
      <div className="box">
        {data.map((d) => (
          <div className="card" key={d.capsule_serial}>
            <p>Capsule Serial: {d.capsule_serial}</p>
            <p>Capsule_id: {d.capsule_id}</p>
            <p>Status: {d.status}</p>
            <p>Original Launch Unix: {d.original_launch_unix}</p>
            <p>Landings: {d.landings}</p>
            <p>Type: {d.type}</p>
            <p>Reuse Count: {d.reuse_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
