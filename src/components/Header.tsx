import { Link, useNavigate } from 'react-router-dom';

import { HeaderDiv, LogoutButton } from '../styled/StyledHeader';
import { AUTH_TOKEN } from '../constants';

const Header = () => {
    const navigate = useNavigate();
    const authToken = localStorage.getItem(AUTH_TOKEN);

    return (
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
            {authToken ? (
                <LogoutButton
                    onClick={() => {
                        localStorage.removeItem(AUTH_TOKEN);
                        navigate(`/`);
                    }}
                >
                    logout
                </LogoutButton>
            ) : (
                <Link to="/login">login</Link>
            )}
        </HeaderDiv>
    );
};

export default Header;
