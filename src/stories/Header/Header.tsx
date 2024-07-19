import { Link } from 'react-router-dom';

import { HeaderDiv, LogoutButton } from './Header.style';

type headerLink = {
    linkTo: string;
    linkTitle: string;
};

interface HeaderProps {
    links?: headerLink[];
    authToken?: string | null;
    onLogout?: () => void;
}

export const HeaderStory = ({ links, authToken, onLogout }: HeaderProps) => (
    <HeaderDiv>
        {links &&
            links.map((link, index) => (
                <Link key={index} to={link.linkTo}>
                    {link.linkTitle}
                </Link>
            ))}
        {authToken ? (
            <LogoutButton onClick={onLogout}>logout</LogoutButton>
        ) : (
            <Link to="/login">Login</Link>
        )}
    </HeaderDiv>
);
