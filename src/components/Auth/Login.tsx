import { ApiError } from '@/api';
import { useToken } from '@/hooks';
import { loginUser } from '@/services';
import { AuthLogin } from '@/types';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const initialState: AuthLogin = {
  email: '',
  password: ''
};

const Login = () => {
  const [credentials, setCredentials] = useState<AuthLogin>(initialState);
  const [error, setError] = useState('');
  const { setToken } = useToken();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const data = await loginUser(credentials);
      if (data.token) {
        setToken(data.token);
        navigate('/plants');
      }
    } catch (err) {
      setError((err as ApiError).message || 'Login failed');
    }
  };

  const { email, password } = credentials;

  return (
    <div className="login">
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
      <p>
        Don't have an account? <Link to="/signin">Register</Link>
      </p>
    </div>
  );
};

export default Login;
