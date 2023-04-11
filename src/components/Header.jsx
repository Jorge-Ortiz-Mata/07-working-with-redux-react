import {  useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(authActions.logOut());
  }

  return(
    <header>
      <nav>
        <ul>
          <li>Home</li>
          {
            isAuthenticated && <>
              <li>Services</li>
              <li>Products</li>
              <li onClick={handleLogout}>LogOut</li>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;
