import styled from 'styled-components'
import Button from '../common/Button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PageNationBlock = styled.div`
    width: 320px;
    margin:  0 auto;
    display: flex;
    justify-content: space-between;
    margin-left: 42%;
    margin-bottom: 3rem;
    position: fixed; 
    bottom: 0; 
`
const PageNumber = styled.div``

// const buildLink = ({ page }) => {
//     const query = qs.stringify({ page });
//     return page ? `/@${username}?${query}` : `/?${query}`;
// }


const PageNation = ({ page }) => {
    const [display, setDisplay] = useState(false);
    const last_page = JSON.parse(localStorage.getItem('last-page'));

    useEffect(() => {
        if (page === 1) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }, [page])
    return (
        <PageNationBlock>
            <Link to={`?page=${page - 1}`}>
                <Button disabled={display}>
                    이전
                </Button>
            </Link>
            <PageNumber>{page}</PageNumber>

            <Link to={`?page=${page + 1}`}>
                <Button disabled={last_page === page ? true : false}>
                    다음
                </Button>
            </Link>
        </PageNationBlock>
    );
};

export default PageNation;