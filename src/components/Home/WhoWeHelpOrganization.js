import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";

function Items({ currentItems }) {
    return (
        <div className="items">
            {currentItems && currentItems.map((item) => (
                <div key={item.nameOrganization} className="itemContainer">
                    <div className="itemLeftBox">
                        <div className="nameOrganization">
                            { item.nameOrganization }
                        </div>
                        <div className="goalsOrganization">
                            { item.goalsOrganization }
                        </div>
                    </div>
                    <div className="itemRightBox goalsOrganization">
                        { item.collectedItems }
                    </div>
                </div>
            ))}
        </div>
    );
}

function PaginatedItems(props) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        setItemOffset(0 * props.itemsPerPage % props.listOfItems.length)
    }, [ props.itemsPerPage, props.listOfItems]);

    useEffect(() => {
        const endOffset = itemOffset + props.itemsPerPage;
        setCurrentItems(props.listOfItems.slice(itemOffset, endOffset));
        const calcPageCount = Math.ceil(props.listOfItems.length / props.itemsPerPage);
        if (calcPageCount === 1) {
            setPageCount(0);
        } else {
            setPageCount(calcPageCount);
        }
    }, [itemOffset, props.itemsPerPage, props.listOfItems]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * props.itemsPerPage % props.listOfItems.length;
        setItemOffset(newOffset);
    };
  
    return (
        <>
            <Items currentItems={currentItems} />

            <ReactPaginate
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={20}
                marginPagesDisplayed={20}
                pageCount={pageCount}
                previousLabel=""
                pageClassName="page-item"
                pageLinkClassName="page-link"
                breakLabel=""
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

const WhoWeHelpOrganization = (props) =>  {
    return <>
        <div className="whoWeHelpPaginationContainer">
            <div className="whoWeHelpText">
                { props.description }
            </div>
            <PaginatedItems itemsPerPage={3} listOfItems={props.listOfItems}/>
        </div>
    </>
};
export default WhoWeHelpOrganization