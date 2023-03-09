const Pagination = ({ totalPost, postsPerPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page) => (
        <button onClick={() => setCurrentPage(page)} style={{ width: "30px" }}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
