import style from "./pagination.module.css";

const Pagination = ({ totalPost, postsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className={style.pagination}>
      {pages.map((page) => (
        <button
          className={style.button}
          onClick={() => setCurrentPage(page)}
          style={{ width: "30px" }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
