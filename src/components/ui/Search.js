import React, { useState } from "react";

const Search = ({ getQuery, getPage }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
    getPage(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        ></input>
      </form>
    </section>
  );
};

export default Search;
