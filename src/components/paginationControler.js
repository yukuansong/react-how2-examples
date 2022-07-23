
import {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from './pagination';

import "./loading-axios-get.css"

function PaginationControler() {

    const pageNumbers = 5;
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [minPageLimit, setMinPageLimit] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [pageData, setPageData] = useState({});

    useEffect(() => {
        setLoading(true);
        // fetch(`https://api.instantwebtools.net/v1/passenger?currentPage=${currentPage}&size=5`)
        axios.get('/v1/passenger', {params: {currentPage: currentPage, size: 5}})
        .then((response) => {setPageData(response.data)})
        .then(() => setLoading(false));

        console.log("calling from useEffect------" +currentPage)
        
    }, [currentPage]);

    const onPrevClick = () => {
        if((currentPage -1 ) % pageNumbers === 0 ) {
            setMinPageLimit(minPageLimit - pageNumbers);
            setMaxPageLimit(maxPageLimit - pageNumbers);
        }
        setCurrentPage((prev) => prev -1);
    };

    const onNextClick = () => {
        if ((currentPage+1) > maxPageLimit) {
            setMaxPageLimit(maxPageLimit + pageNumbers);
            setMinPageLimit(minPageLimit + pageNumbers);
        }
        setCurrentPage(prev=>prev+1);
    };

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const paginationAttributes = {
        currentPage,
        maxPageLimit,
        minPageLimit,
        response: pageData
    }

    return (
        <div>
            <h2> Passenger List: </h2>
            {console.log("from display...........")}

        {loading?<div className="loader"/>:<Pagination {...paginationAttributes}
                    onNextClick={onNextClick} 
                    onPrevClick={onPrevClick}
                    onPageChange={onPageChange} />}
        </div>
    )
}

export default PaginationControler;