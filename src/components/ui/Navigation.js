import React from "react";

const Navigation = ({ page, setPage, isLoading, prev, next }) => {
  return !isLoading ? (
    <div className="center">
      {prev != null ? (
        <button
          className="nav-bottom"
          onClick={() => setPage(page <= 1 ? 1 : page - 1)}
        >
          Prev
        </button>
      ) : null}
      {next != null ? (
        <button
          className="nav-bottom"
          onClick={() => setPage(page >= 42 ? 42 : page + 1)}
        >
          Next
        </button>
      ) : null}
    </div>
  ) : null;
};

export default Navigation;
