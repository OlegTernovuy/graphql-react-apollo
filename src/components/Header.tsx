import { useNavigate } from 'react-router-dom';

import { AUTH_TOKEN } from '../constants';
import { HeaderStory } from '../stories/Header/Header';

const headerLinks = [
    {
        linkTo: '/',
        linkTitle: 'All list',
    },
    {
        linkTo: '/create',
        linkTitle: 'Add list',
    },
    {
        linkTo: '/search',
        linkTitle: 'Search',
    },
];

const Header = () => {
    const navigate = useNavigate();
    const authToken = localStorage.getItem(AUTH_TOKEN);

    const handleLogout = () => {
        localStorage.removeItem(AUTH_TOKEN);
        navigate('/');
    };

    return (
        <HeaderStory
            links={headerLinks}
            authToken={authToken}
            onLogout={handleLogout}
        />
    );
};

export default Header;
