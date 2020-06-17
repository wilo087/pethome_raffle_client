import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';

import Loading from '../Loading';
import { Error, GQLError } from '../../interfaces';
import './Login.scss';
import LoginMutation from './LoginMutation';


const Login: React.FC = (): JSX.Element => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <LoginMutation>
      {(login: CallableFunction, { loading }: any): JSX.Element => {
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
          e.preventDefault();
          const data = { username: credentials.username, password: credentials.password };

          login({ variables: { data } })
            /* eslint-disable no-shadow */
            .catch((e: GQLError): void => {
              e.graphQLErrors.forEach((err: Error): void => {
                if (err.extensions.code === 'UNAUTHENTICATED') {
                  setError('Invalid Credentials');
                } else {
                  setError('a ocurred error try error later');
                }
              });
            });
        };
        return (
          <div className="form-login login-fm">
            {error && (
              <Alert severity="error">{error}</Alert>
            )}
            <br />
            <div id="login">
              <form onSubmit={handleSubmit}>
                <div className="field-wrap">
                  <input
                    placeholder="username"
                    type="text"
                    required
                    autoComplete="off"
                    name="username"
                    onChange={handleChange}
                    value={credentials.username}
                  />
                </div>

                <div className="field-wrap">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    autoComplete="off"
                    onChange={handleChange}
                    value={credentials.password}
                  />
                </div>
                <button type="submit" className="button button-block">Log In</button>
              </form>
              {loading && <Loading />}
            </div>
          </div>
        );
      }}
    </LoginMutation>
  );
};

export default Login;
