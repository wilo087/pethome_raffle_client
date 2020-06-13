import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const SET_LOGIN = gql`
mutation login($data: inputLogin!){
  login(data: $data){
      token
  }
}`;

const Login: React.FC = (): JSX.Element => {
  const [credentials, setCredentials] = useState({
    user: '',
    password: '',
  });

  const [mutation] = useMutation(SET_LOGIN);


  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const response = await mutation({
      variables: {
        data: {
          user: credentials.user,
          password: credentials.password,
        },
      },
    });
  };


  return (
    <div>
      <div className="amd-conteiner">
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            className=""
            name="user"
            onChange={handleChange}
            placeholder="user"
            value={credentials.user}
          />

          <input
            type="password"
            className=""
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
          />
          <button type="submit">Inciar Sesión</button>
        </form>

      </div>
      {/* {error && <p>Error :( Please try again</p>} */}
    </div>
  );
};

export default Login;
