import React, { useState } from 'react';
import './checkin.scss';

const CheckIn: React.FC = (): JSX.Element => {
  const [data, setData] = useState({
    name: '',
    code: '',
    identificationCard: '',
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="form">
      <div id="signup">
        <h1>Register Participant</h1>
        <form action="/" method="post">
          <div className="top-row">

            <div className="field-wrap">
              <label htmlFor="name">
                Name
                {' '}
                <span className="req">*</span>
              </label>

              <input
                id="name"
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
                id="code"
                type="text"
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
              id="identificationCard"
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
    </div>
  );
};

export default CheckIn;

