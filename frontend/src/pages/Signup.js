import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form className="signup bg-slate-400 p-10 border-4 border-slate-700 rounded-md shadow-lg" onSubmit={handleSubmit}>
    <h3 className="text-2xl text-center mb-5 font-semibold text-slate-900">Sign Up</h3>
    
    <label className="block text-slate-800 mb-2">Email address:</label>
    <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
        className="w-full p-3 mb-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
    />
    
    <label className="block text-slate-800 mb-2">Password:</label>
    <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
        className="w-full p-3 mb-5 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-600"
    />

    <button 
        className="w-full py-3 bg-emerald-900 text-white font-semibold rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-colors disabled:opacity-50"
        disabled={isLoading}
    >
        Sign up
    </button>

    {error && <div className="mt-4 p-2 bg-red-200 text-red-800 border border-red-400 rounded">{error}</div>}
</form>

  )
}

export default Signup