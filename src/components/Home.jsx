import "./Home.scss";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getData } from "../Redux/action";
import axios from "axios";
import Data from "./Data";
import Pagination from "./Pagination";

const Home = () => {
  // const [search, setSearch] = useState("");
  // const [d, setD] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.spacexdata.com/v3/capsules`);
      setData(res.data);
      setLoading(false);
    };
    getData();
  }, []);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  // const { data } = useSelector((state) => state.data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getData(dispatch);
  // }, [dispatch]);

  // const searchData = async (title) => {
  //   const response = await fetch(
  //     `https://api.spacexdata.com/v3/capsules?s=${title}`
  //   );
  //   const data = await response.json();
  //   setD(data.Search);
  // };

  // const handleKey = (e) => {
  //   if (e.code === "Enter" || e.code === "NumpadEnter") {
  //     searchData(search);
  //   }
  // };

  return (
    <div className="Div">
      <div className="search">
        <h2>Search Form</h2>
        <div className="search1">
          <input
            type="text"
            placeholder="Input Placeholder"
            className="input"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            // onKeyDown={handleKey}
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
            // onClick={() => searchData(search)}
          />
        </div>
      </div>
      <Data data={currentData} loading={loading} />
      <Pagination
        dataPerPage={dataPerPage}
        totalData={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
