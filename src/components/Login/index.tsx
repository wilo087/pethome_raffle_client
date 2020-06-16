import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import Loading from '../Loading';
import { Error, GQLError } from '../../interfaces';

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
