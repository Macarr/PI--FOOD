import style from "./pagination.module.css";

const Pagination = ({
  totalPost,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
  };

  return (
    <div className={style.pagination}>
      <button onClick={handlePrev} className={style.button}>
        PREV
      </button>
      {pages.map((page, index) => (
        <button
          key={index}
          className={page === currentPage ? style.active : style.button}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNext} className={style.button}>
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
