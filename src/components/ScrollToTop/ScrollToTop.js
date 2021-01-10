import { useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';


const ScrollToTop = (props) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return props.children;
}

export default withRouter(ScrollToTop);