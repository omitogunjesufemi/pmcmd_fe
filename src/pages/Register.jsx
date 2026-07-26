import { useState } from "react";
import { EyeIcon, EyeSlashIcon, RectangleGroupIcon } from "@heroicons/react/24/solid";
import { login, register } from "../services/authService";
import { useApi } from "../hooks/useApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [department, setDepartment] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [pwdError, setPwdError] = useState({});
    const navigate = useNavigate();
    const { refreshProfile } = useAuth();

    const { isLoading, error, refetch: executeCreateUser } = useApi(register, false);
    const { error: loginError, refetch: executeLogin } = useApi(login, false);

    function formValidation() {
        let currentErrors = {};
        let isValid = true;

        if (!password) {
            currentErrors.password = 'Password is required.';
            isValid = false;
        } else if (password.length < 8) {
            currentErrors.password = 'Password must be at least 8 characters long.';
            isValid = false;
        }

        if (!retypePassword) {
            currentErrors.retypePassword = 'Please retype your password.';
            isValid = false;
        } else if (password !== retypePassword) {
            currentErrors.retypePassword = 'Password does not match.';
            isValid = false;
        }

        setPwdError(currentErrors);

        if (pwdError.password || pwdError.retypePassword) {
            error = "Please check your password.";
        }
        return isValid;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (formValidation()) {
            await executeCreateUser(email, firstName, lastName, role, department, password);
            await executeLogin(email, password);
            await refreshProfile();
            navigate("/");
        }
    }

    return (
        <div className='w-full flex justify-center items-center min-h-dvh bg-gray-50 text-gray-800'>
            <div className='bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col gap-8'>

                <div>
                    <a href='/' className='flex flex-row justify-center items-center'>
                        <RectangleGroupIcon className="size-12" />
                        <p className='font-bold text-2xl font-sans'>PMCMD</p>
                    </a>
                </div>

                <div className='flex flex-col gap-4 items-center'>
                    <p className='font-bold text-4xl'>Welcome!</p>
                    <p className='text-m'>Please enter your details</p>
                </div>
                {error && <div className='p-3 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 font-medium'>{error}</div>}
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div className='flex flex-col'>
                        <label className='mb-1.5 text-sm font-medium text-gray-700'>
                            Email address<span className="text-red-600"> *</span>
                        </label>
                        <input className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-col w-full'>
                            <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                First Name<span className="text-red-600"> *</span>
                            </label>
                            <input className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>

                        <div className='flex flex-col w-full'>
                            <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                Last Name<span className="text-red-600"> *</span>
                            </label>
                            <input className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                    </div>

                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-col w-full'>
                            <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                Role<span className="text-red-600"> *</span>
                            </label>
                            <select className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' name="role" id="role" onChange={(e) => setRole(e.target.value)} required >
                                <option value="">-- Select a Role --</option>
                                <option value="pm">Project Manager</option>
                                <option value="pmo">Head, Project Management</option>
                            </select>
                        </div>

                        <div className='flex flex-col w-full'>
                            <label className='mb-1.5 text-sm font-medium text-gray-700'>
                                Department<span className="text-red-600"> *</span>
                            </label>
                            <select className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' name="role" id="role" onChange={(e) => setDepartment(e.target.value)} required >
                                <option value="">-- Select a Department --</option>
                                <option value="bdd">BDD</option>
                                <option value="it">IT</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-col relative'>
                        <label className='mb-1.5 text-sm font-medium text-gray-700'>
                            Password<span className="text-red-600"> *</span>
                        </label>
                        <input className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type={showPassword ? 'text' : 'password'} name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={() => formValidation()} />

                        <button type="button" className='absolute right-0 cursor-pointer text-sm font-medium' onClick={() => {
                            showPassword === true ? setShowPassword(false) : setShowPassword(true)
                        }}>{showPassword ? <EyeSlashIcon className="size-4" /> : <EyeIcon className="size-4" />}</button>
                    </div>
                    {pwdError.password && <div className='p-1 text-red-600 text-sm font-medium'>{pwdError.password}</div>}

                    <div className='flex flex-col'>
                        <label className='mb-1.5 text-sm font-medium text-gray-700'>
                            Retype Password<span className="text-red-600"> *</span>
                        </label>
                        <input className='border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition' type={showPassword ? 'text' : 'password'} name="retypePassword" id="retypePassword" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} onBlur={() => formValidation()} />
                    </div>
                    {pwdError.retypePassword && <div className='p-1 text-red-600 text-sm font-medium'>{pwdError.retypePassword}</div>}

                    <div className='flex items-center justify-center'>
                        <button className='bg-blue-500 rounded-xl px-3 py-2 w-full hover:bg-blue-700 text-white font-medium transition disabled:bg-blue-300' type="submit" disabled={isLoading}> {isLoading ? 'Creating Account...' : 'Register'}</button>
                    </div>

                    <div className='m-auto'>
                        <span>
                            Already have an account? <a href='/login' className='text-m w-full text-indigo-600'>Login</a>
                        </span>
                    </div>
                </form>

            </div>
        </div>
    );
}
