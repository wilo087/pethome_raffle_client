import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import { Error, GQLError } from '../../interfaces';
import Loading from '../Loading';

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
    }).catch((errors: GQLError): void => {
      errors.graphQLErrors.forEach((err: Error): void => {
        if (err.message === 'Unauthorized') {
          setError('Invalid Credentials');
        }
      });
    });
    setError('an error occurred try again later');
  };

  return (
    <div>

      <div className="amd-conteiner">
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            className=""
            name="username"
            onChange={handleChange}
            placeholder="username"
            value={credentials.username}
          />

          <input
            type="password"
            className=""
            placeholder="password"
            name="password"
            autoComplete="off"
            onChange={handleChange}
            value={credentials.password}
          />
          <button type="submit">Inciar Sesión</button>
        </form>

      </div>
      {mutationLoading && <Loading />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
