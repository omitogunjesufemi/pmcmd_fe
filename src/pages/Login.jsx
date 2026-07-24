import { useState } from 'react';
import { RectangleGroupIcon } from '@heroicons/react/24/solid';
import { useApi } from '../hooks/useApi';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export default function Login() {
    const { refreshProfile } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { isLoading, error, refetch: executeLogin } = useApi(login, false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await executeLogin(email, password);
            await refreshProfile();
            navigate('/');
        } catch (error) {

        }
    }

    return (
        <div className='w-full flex justify-center items-center min-h-dvh bg-gray-50 text-gray-800'>
            <div className='w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col gap-8'>
                <div className='flex flex-row justify-center items-center'>
                    <RectangleGroupIcon className="size-12" />
                    <p className='font-bold text-2xl font-sans'>PMCMD</p>
                </div>
                <div className='flex flex-col gap-4 items-center'>
                    <p className='font-bold text-4xl'>Welcome Back!</p>
                    <p className='text-m'>Please enter your details</p>
                </div>
                {error && <div className='p-3 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 font-medium'>{error}</div>}
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div className='flex flex-col'>
                        <label className='mb-1.5 text-sm font-medium text-gray-700'>Email address</label>
                        <input className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='flex flex-col'>
                        <label className='mb-1.5 text-sm font-medium text-gray-700'>Password</label>
                        <input className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className='flex flex-row gap-2 justify-between'>
                        <div className='flex flex-row gap-2 items-center'>
                            <input type="checkbox" name="remember-me" id="remember-me" />
                            <p className='text-sm'>Remember</p>
                        </div>
                        <div>
                            <a href='/' className='text-sm text-indigo-600'>Forget Password?</a>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <button className='bg-blue-500 rounded-xl px-3 py-2 w-full hover:bg-blue-700 text-white font-medium transition disabled:bg-blue-300' type="submit" disabled={isLoading}>{isLoading ? 'Signing in...' : 'Login'}</button>
                    </div>

                    <div className='m-auto'>
                        <span>
                            Don't have an account? <a href='/' className='text-m w-full text-indigo-600'>Register</a>
                        </span>
                    </div>
                </form>

            </div>
        </div>
    );
}
