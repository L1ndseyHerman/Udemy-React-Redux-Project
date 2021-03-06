import classes from './Auth.module.css';

import {authActions} from '../store/auth';
import {useSelector, useDispatch} from 'react-redux';

const Auth = () => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.isAuthenticated);

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  const allComponentGraphics = <main className={classes.auth}>
  <section>
    <form onSubmit={loginHandler}>
      <div className={classes.control}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' />
      </div>
      <div className={classes.control}>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' />
      </div>
      <button type="submit">Login</button>
    </form>
  </section>
</main>;

  return (
    <>
      {!auth && allComponentGraphics}
    </>
  );
};

export default Auth;
