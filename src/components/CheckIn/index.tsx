import React, { useState } from 'react';

const CheckIn: React.FC = (): JSX.Element => {

  const [data, setData] = useState({
    name: '',
    code: '',
    identificationCard: ''
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="amd-conteiner">
      <form>
        <input
          type="text"
          className=""
          name="name"
          placeholder="name"
          value={data.name}
          onChange={handleChange}
          autoComplete="off"
        />

        <input
          type="text"
          className=""
          placeholder="code"
          name="code"
          value={data.code}
          onChange={handleChange}
          autoComplete="off"
        />

        <input
          type="text"
          className=""
          placeholder="identification card"
          name="identificationCard"
          value={data.identificationCard}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit">Registrar</button>
      </form>

    </div>
  )
}


export default CheckIn