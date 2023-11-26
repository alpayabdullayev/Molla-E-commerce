import { useState } from 'react';

const UsePagination = (curPage, perPage, data) => {
  const [currentPage, setCurrentPage] = useState(curPage);
  const [pagePerData] = useState(perPage);

  const PageNumbers = [];

  for (let i = 1; i <= Math.ceil(data.length / pagePerData); i++) {
    PageNumbers.push(i);
  }

  const lastElementIndex = currentPage * pagePerData;
  const firstElementIndex = lastElementIndex - pagePerData;

  const pageData = data.slice(firstElementIndex, lastElementIndex);

  const handleClick = (num) => {
    setCurrentPage(num);
  };

  return { handleClick, PageNumbers, pageData };
};

export default UsePagination;
