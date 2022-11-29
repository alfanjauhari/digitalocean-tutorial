import { Welcome } from './welcome';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Welcome Spec', () => {
  it('should render `Hello World!` message after submit form', async () => {
    const { getByRole, findByRole } = render(<Welcome />);

    const submitButton = getByRole('button');

    await userEvent.click(submitButton);

    const messageElement = await findByRole('heading');
    expect(messageElement).toHaveTextContent('Hello World!');
  });

  it('should render `Hello Name!` message after submit form with input value', async () => {
    const { getByRole, findByRole } = render(<Welcome />);

    const inputField = getByRole('textbox');
    const submitButton = getByRole('button');

    await userEvent.type(inputField, 'Name');
    await userEvent.click(submitButton);

    const messageElement = await findByRole('heading');
    expect(messageElement).toHaveTextContent('Hello Name!');
  });
});
