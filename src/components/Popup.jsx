import React from "react";

const Popup = ({ buttonPopup, setButtonPopup, data }) => {
  console.log(data);
  return buttonPopup ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setButtonPopup(false)}>
          Close
        </button>
        <p>Capsule Serial: {data.capsule_serial}</p>
        <p>Capsule_id: {data.capsule_id}</p>
        <p>Status: {data.status}</p>
        <p>Original Launch Unix: {data.original_launch_unix}</p>
        <p>Landings: {data.landings}</p>
        <p>Type: {data.type}</p>
        <p>Reuse Count: {data.reuse_count}</p>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
