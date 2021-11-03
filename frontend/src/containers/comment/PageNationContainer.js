import PageNation from "../../components/common/PageNation";
import { withRouter } from "react-router";
import qs from 'query-string'

const PageNationContainer = ({ location }) => {
    const { page } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });
    return (
        <PageNation
            page={parseInt(page, 10)}
        >

        </PageNation>
    );
};

export default withRouter(PageNationContainer);