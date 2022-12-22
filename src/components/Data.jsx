const Data = ({ data, loading, search, setButtonPopup }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="box">
      {data
        .filter((e) => {
          if (search === "") {
            return e;
          } else if (e.status.includes(search.toLowerCase())) {
            return e;
          }
        })
        .map((d) => (
          <div
            className="card"
            onClick={() => setButtonPopup(true)}
            key={d.capsule_serial}
          >
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
