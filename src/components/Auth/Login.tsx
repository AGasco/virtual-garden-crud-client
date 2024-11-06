import { ChangeEvent, FormEvent, useState } from 'react';
import { loginUser } from '../services/authService';

const initialState = {
  email: '',
  password: ''
};

const Login = () => {
  const [credentials, setCredentials] = useState(initialState);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const data = await loginUser(credentials);
      localStorage.setItem('token', data.token);
      // TODO Redirect user
    } catch (err: Error) {
      setError(err.message || 'Login failed');
    }
  };

  const { email, password } = credentials;

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
