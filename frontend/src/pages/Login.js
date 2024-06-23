import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  // Set initial values for email and password
  const [email, setEmail] = useState('test@gmail.com'); // Initial email value
  const [password, setPassword] = useState('Test@123'); // Initial password value

  // Retrieve login function, loading state, and error from custom hook
  const { login, isLoading, error } = useLogin();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password); // Call login function with current email and password
  };

  return (
    <form className="login bg-slate-400 p-10 border-4 border-slate-700 rounded-md shadow-lg" onSubmit={handleSubmit}>
      <h3 className="text-2xl text-center mb-5 font-semibold text-slate-900">Login</h3>

      <label className="block text-slate-800 mb-2">Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} // Update email state on change
        value={email} // Bind email value to state
        className="w-full p-3 mb-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />

      <label className="block text-slate-800 mb-2">Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} // Update password state on change
        value={password} // Bind password value to state
        className="w-full p-3 mb-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />

      <button 
        type="submit"
        className="w-full py-3 bg-emerald-900 text-white font-semibold rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-colors disabled:opacity-50"
        disabled={isLoading}
      >
        Login
      </button>

      {error && <div className="mt-4 p-2 bg-red-200 text-red-800 border border-red-400 rounded">{error}</div>}
    </form>
  );
};

export default Login;
