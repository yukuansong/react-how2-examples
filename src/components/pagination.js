// Instead of fetching huge amounts of data from a
// server API, pagination loads data on demand,
// decreasing load time and improving the overal UI

import "./pagination.css";

export default function Pagination(props) {
  const { currentPage, maxPageLimit, minPageLimit } = props;
  var totalPages = props.response.totalPages;
  const data = props.response.data;

  // data to be displayed
  const renderData = (data) => {
    return (
      <ul>
        {data.map((d) => (
          <li key={d["_id"]}>
            {" "}
            The passenger having id {d["_id"].slice(
              d["_id"].length - 5
            )} using {d.airline[0].name} airlines
          </li>
        ))}
      </ul>
    );
  };

  const handleClick = (event) => {
    props.onPageChange(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const pageNumbers = pages.map((page) => {
    if ((page <= maxPageLimit) & (page >= minPageLimit))
      return (
        <li
          key={page}
          id={page}
          onClick={handleClick}
          className={page === currentPage ? "active" : null}
        >
          {page}
        </li>
      );
    else return null;
  });

  const handlePrevClick = () => {
    props.onPrevClick();
  };
  const handleNextClick = () => {
    props.onNextClick();
  };

  // page ellipses
  let pageIncrementEllipses = null;
  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>;
  }
  let pageDecrementEllipses = null;
  if (minPageLimit > 1) {
    pageDecrementEllipses = <li onClick={handlePrevClick}>&hellip;</li>;
  }
  return (
    <div className="main">
      <div className="mainData">
        {renderData(data)}
      </div>
      <ul className="pageNumbers">
        <li>
          <button onClick={handlePrevClick} disabled={currentPage === pages[0]}>
            Prev
          </button>
        </li>
        {pageDecrementEllipses}
        {pageNumbers}
        {pageIncrementEllipses}
        <li>
          <button
            onClick={handleNextClick}
            disabled={currentPage === pages[pages.length - 1]}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}
