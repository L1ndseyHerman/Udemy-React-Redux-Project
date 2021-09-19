import classes from './Header.module.css';

import {authActions} from '../store/index';
import {useSelector, useDispatch} from 'react-redux';

const Header = () => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const graphicsForLoggedInPerson = <ul>
  <li>
    <a href='/'>My Products</a>
  </li>
  <li>
    <a href='/'>My Sales</a>
  </li>
  <li>
    <button onClick={logoutHandler}>Logout</button>
  </li>
</ul>;

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {auth && graphicsForLoggedInPerson}
      </nav>
    </header>
  );
};

export default Header;
