import {  useDispatch } from 'react-redux';
import { authActions } from '../store';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name="name" />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" />
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
  )
}

export default Login;
