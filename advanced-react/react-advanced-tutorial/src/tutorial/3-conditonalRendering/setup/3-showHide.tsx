import React, { useEffect, useState } from "react";

import './3-showHide.css'

const ShowHide: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <div className="window__div">
      <h1>Window</h1>
      <h2>Size: {size} px</h2>
    </div>
  );
};

export default ShowHide;
