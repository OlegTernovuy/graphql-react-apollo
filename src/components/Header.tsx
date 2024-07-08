import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <Link to="/">
            <div>All list</div>
        </Link>
        <Link to="/create">
            <div>Add list</div>
        </Link>
        <Link to="/search">
            <div>Search in list</div>
        </Link>
    </div>
);

export default Header;
