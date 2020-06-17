import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Alert } from '@material-ui/lab';

import Loading from '../Loading';
import { Error, GQLError } from '../../interfaces';
import './Login.scss';

const SET_LOGIN = gql`
  mutation login($data: inputLogin!){
  login(data: $data){
      token
  }
}`;

const Login: React.FC = (): JSX.Element => {
  const [setLogin, { loading: mutationLoading }] = useMutation(SET_LOGIN);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setLogin({
      variables: {
        data: {
          username: credentials.username,
          password: credentials.password,
        },
      },
    }).catch((e: GQLError) => {
      e.graphQLErrors.forEach((err: Error): void => {
        if (err.extensions.code === 'UNAUTHENTICATED') {
          setError('Invalid Credentials');
        }
      });
    });
    setError('an error occurred please try again later');
  };

  return (
    <div className="amd-container">
      {error && (
        <Alert
          severity="error"
        >
          {error}
        </Alert>
      )}
      <br />

      <div className="form-login login-fm">
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
            <button className="button button-block">Log In</button>
          </form>
          {mutationLoading && <Loading />}
        </div>
      </div>
    </div>

  );
};

export default Login;
