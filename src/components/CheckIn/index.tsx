import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';

import CheckInMutation from './CheckInMutation';
import { Error, GQLError } from '../../interfaces';
import Loading from '../Loading';
import './checkin.scss';


interface State {
  name: string;
  code: string | number;
  identificationCard: string;
}

const InitialState: State = {
  name: '',
  code: '',
  identificationCard: '',
};

const CheckIn: React.FC = (): JSX.Element => {
  const history = useHistory();
  const [error, setError] = useState('');
  const [data, setData] = useState<State>(InitialState);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <CheckInMutation>
      {(checkin: CallableFunction, { loading }: { loading: boolean }): JSX.Element => {
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
          e.preventDefault();

          const info: State = {
            name: data.name,
            code: Number(data.code),
            identificationCard: data.identificationCard,
          };

          checkin({ variables: { data: info } })
            /* eslint-disable no-shadow */
            .catch((e: GQLError): void => {
              e.graphQLErrors.forEach((err: Error) => {
                if (err.extensions.code === 'UNAUTHENTICATED') {
                  history.push('/login');
                } else if (err.extensions.code === 'CONFLIT') {
                  setError(err.message);
                } else {
                  setError('an ocurred error try again later');
                }
              });
            });
        };
        return (
          <div className="form">
            {error && (
              <Alert severity="error">
                {error}
              </Alert>
            )}
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
        );
      }}

    </CheckInMutation>

  );
};

export default CheckIn;
