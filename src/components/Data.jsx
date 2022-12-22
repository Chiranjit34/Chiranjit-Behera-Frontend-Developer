import React from "react";

const Data = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
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
  );
};

export default Data;
