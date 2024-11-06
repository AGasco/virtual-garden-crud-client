import { ApiError } from '@/api';
import { TOKEN } from '@/constants';
import { registerUser } from '@/services';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
  username: '',
  email: '',
  password: ''
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const data = await registerUser(formData);
      localStorage.setItem(TOKEN, data.token);
      navigate('/plants');
    } catch (err) {
      setError((err as ApiError).message || 'Registration failed');
    }
  };

  const { username, email, password } = formData;

  return (
    <>
      {' '}
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
        {error && <p>{error}</p>}
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default Register;
