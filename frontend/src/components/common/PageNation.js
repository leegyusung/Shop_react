import styled from 'styled-components'
import qs from 'qs';
import Button from '../common/Button';

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

const PageNation = () => {
    return (
        <PageNationBlock>
            <Button>
                이전
            </Button>
            <PageNumber>1</PageNumber>
            <Button>
                다음
            </Button>
        </PageNationBlock>
    );
};

export default PageNation;