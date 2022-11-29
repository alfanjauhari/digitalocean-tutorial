import { FormEventHandler, useState } from 'react';
import axios from 'axios';

export function Welcome() {
  const API_URL = process.env['NEXT_PUBLIC_API_URL'] || 'http://0.0.0.0:8000';

  const [message, setMessage] = useState<string>();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const params: Record<string, FormDataEntryValue | undefined> = {};

    for (const [key, value] of formData.entries()) {
      params[key] = value ? value : undefined;
    }

    try {
      const data = await axios
        .get(`${API_URL}`, {
          params,
        })
        .then((res) => res.data);

      setMessage(data.message);
    } catch (error) {
      alert('Something went wrong!');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {!!message && <h1>{message}</h1>}
      <input
        placeholder="Input your name. Default is 'World'"
        style={{
          width: '100%',
        }}
        name="name"
      />
      <button
        type="submit"
        style={{
          marginTop: '1rem',
        }}
      >
        Submit Form
      </button>
    </form>
  );
}
