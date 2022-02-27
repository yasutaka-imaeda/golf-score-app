import React, { useState, useEffect } from "react";
import Header from "../../component/Header/Header";
import InputCourse from "../../component/InputCourse/InputCourse";
import InScoreOfOneHole from "../../component/InScoreOfOneHole/InScoreOfOneHole";
import styles from "./InputScore.module.scss";
import ReactPaginate from "react-paginate";
import { selectScore } from "../../app/scoreSlice";
import { useAppSelector } from "../../app/hooks";

const InputScore: React.FC = () => {
  const items: any = [1, 2];
  const inputScores = ({ currentItems }: any) => {
    return (
      <div className={styles.scoreItem}>
        {currentItems && (
          <div>
            <div className={styles.halfCourse}>
              <InScoreOfOneHole hole={9 * currentItems - 8} />
              <InScoreOfOneHole hole={9 * currentItems - 7} />
              <InScoreOfOneHole hole={9 * currentItems - 6} />
              <InScoreOfOneHole hole={9 * currentItems - 5} />
              <InScoreOfOneHole hole={9 * currentItems - 4} />
            </div>
            <div className={styles.halfCourse}>
              <InScoreOfOneHole hole={9 * currentItems - 3} />
              <InScoreOfOneHole hole={9 * currentItems - 2} />
              <InScoreOfOneHole hole={9 * currentItems - 1} />
              <InScoreOfOneHole hole={9 * currentItems} />
            </div>
          </div>
        )}
      </div>
    );
  };

  const PaginatedItems = ({ itemsPerPage }: any) => {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
    return (
      <>
        {inputScores({ currentItems })}
        <div className={styles.pagenate}>
          <ReactPaginate
            activeClassName={styles.active}
            activeLinkClassName={styles.activeLink}
            breakLabel="..."
            nextClassName={styles.next}
            nextLabel="IN"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            pageLinkClassName={styles.link}
            previousClassName={styles.previous}
            previousLabel="OUT"
            disabledClassName="disabled"
            // @ts-ignore
            renderOnZeroPageCount={null}
          />
        </div>
      </>
    );
  };
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header />
        </div>
        <InputCourse />
        <div className={styles.inputScore}>
          <PaginatedItems itemsPerPage={1} />
        </div>
      </div>
    </div>
  );
};

export default InputScore;
