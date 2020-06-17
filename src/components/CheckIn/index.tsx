import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';

import { Error } from '../../interfaces';
import Loading from '../Loading';
import './checkin.scss';


const SET_CHECKIN = gql`
  mutation createUser($data: createUserInput!){
    createUser(data: $data){
      name,
      identificationCard,
      code,
  }
}`;

const InitialState = {
  name: '',
  code: '',
  identificationCard: '',
};

const CheckIn: React.FC = (): JSX.Element => {
  const [setCheckIn, { loading, data: mutationData }] = useMutation(SET_CHECKIN, {
    ignoreResults: false,
  });
  const history = useHistory();
  const [error, setError] = useState('');
  const [data, setData] = useState(InitialState);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      await setCheckIn({
        variables: {
          data: {
            name: data.name,
            code: Number(data.code),
            identificationCard: data.identificationCard,
          },
        },
      });

      setError('');
      setData({ ...InitialState });
    } catch (e) {
      /* eslint-disable no-shadow */
      e.graphQLErrors.forEach((err: Error): void => {
        if (err.extensions.code === 'UNAUTHENTICATED') {
          history.push('/login');
        } else {
          setError('an error occurred please try again later');
        }
      });
    }
  };

  return (
    <div>
      {mutationData && (
        <Alert
          severity="success"
        >
          the user
          {' '}
          {mutationData.createUser.name}
          {' '}
          is created
        </Alert>
      )}

      {error && (
        <Alert
          severity="error"
        >
          {error}
        </Alert>
      )}

      <div className="form">
        <div id="signup">
          <h1>Register Participant</h1>
          <form onSubmit={handleSubmit}>
            <div className="top-row">

              <div className="field-wrap">
                <label htmlFor="name">
                  Name
                  {' '}
                  <span className="req">*</span>
                </label>

                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                  value={data.name}
                />
              </div>

              <div className="field-wrap">
                <label htmlFor="code">
                  Code
                  {' '}
                  <span className="req">*</span>
                </label>

                <input
                  name="code"
                  type="number"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                  value={data.code}
                />

              </div>
            </div>
            <div className="field-wrap">
              <label htmlFor="identificationCard">
                Identification Card
                {' '}
                <span className="req">*</span>
              </label>

              <input
                name="identificationCard"
                type="text"
                required
                autoComplete="off"
                onChange={handleChange}
                value={data.identificationCard}
              />

            </div>
            <button type="submit" className="button button-block">
              Save
            </button>
          </form>
        </div>
        {loading && <Loading />}
      </div>
    </div>
  );
};

export default CheckIn;
