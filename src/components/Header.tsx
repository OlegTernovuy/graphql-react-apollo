import { Link } from 'react-router-dom';

import { HeaderDiv } from '../styled/StyledHeader';

const Header = () => (
    <HeaderDiv>
        <Link to="/">
            <div>All list</div>
        </Link>
        <Link to="/create">
            <div>Add list</div>
        </Link>
        <Link to="/search">
            <div>Search in list</div>
        </Link>
    </HeaderDiv>
);

export default Header;
