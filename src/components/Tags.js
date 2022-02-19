import React from "react";

const Tags = ({ children, tagName }) => {
  return (
    <>
      <span>
        <span className="tag">{"< "}</span>
        <span className="title">{tagName}</span>
        <span className="tag">{" >"}</span>
      </span>
      {children}
      <span>
        <span className="tag">{"</ "}</span>
        <span className="title">{tagName}</span>
        <span className="tag">{" >"}</span>
      </span>
    </>
  );
};

export default Tags;
