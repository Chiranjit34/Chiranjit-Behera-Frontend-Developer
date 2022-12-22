import "./Home.scss";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getData } from "../Redux/action";
import axios from "axios";
import Data from "./Data";
import Pagination from "./Pagination";
import Popup from "./Popup";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);

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

  return (
    <div className="Div">
      <div className="search">
        <input
          type="text"
          placeholder="Search by status..."
          className="input"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Data data={currentData} loading={loading} search={search} />
      <Popup
        data={currentData}
        buttonPopup={buttonPopup}
        setButtonPopup={setButtonPopup}
      />
      <Pagination
        dataPerPage={dataPerPage}
        totalData={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
