import { SearchBox } from './SearchBox';
import { NavLink } from 'react-router-dom';

export const Navbar = ({ inputTextHandler, inputText }) => {
    return (
        <nav>
            <a className="logo" href="/">POPCORN</a>
            <div className="nav-links-wrapper">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/WatchList">Watchlist</NavLink>

                <SearchBox inputTextHandler={inputTextHandler} inputText={inputText} />
            </div>
        </nav>
    )
}
