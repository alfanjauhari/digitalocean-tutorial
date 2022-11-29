import axios from 'axios';
import { GETWelcomeReply } from './api';

const PORT = process.env.PORT || 8000;

describe('Welcome API (/)', () => {
  it('should return warm welcome message', async () => {
    const data = await axios
      .get<GETWelcomeReply>(`http://0.0.0.0:${PORT}?name=Alfan`)
      .then((res) => res.data);

    expect(data.message).toBe('Hello Alfan!');
  });
});
