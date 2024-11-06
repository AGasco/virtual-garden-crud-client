import { ChangeEvent, FormEvent, useState } from 'react';
import { registerUser } from '@/services';
import { ApiError } from '@/api';

const initialState = {
  username: '',
  email: '',
  password: ''
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const data = await registerUser(formData);
      localStorage.setItem('token', data.token);
      // TODO Redirect user
    } catch (err) {
      setError((err as ApiError).message || 'Registration failed');
    }
  };

  const { username, email, password } = formData;

  return (
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
  );
};

export default Register;
