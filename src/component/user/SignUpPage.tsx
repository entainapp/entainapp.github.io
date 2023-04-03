import { UserInfo, UserState } from '@/libs/interfaces';
import { AppDispatch } from '@/store';
import { signUp } from '@/store/actions/userAction';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Header, Spinner } from '../ui';

export const SignUpPage = (): JSX.Element => {

    const [formData, setFormData] = useState<UserInfo>({ username: '', email: '', password: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const isLoading = useSelector((state: any) => state.user.isLoading)
    const user = useSelector((state: any) => state.user.user)
    const error = useSelector((state: any) => state.user.error)

    useEffect(() => {
        if (!isLoading) {
            if (!!user) {
                toast.success("SignUp successfully!")
            }
            if (!!error) {
                toast.error(error)
            }
        }
    }, [isLoading])

    const dispatch = useDispatch()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(formData);
        // Add logic to submit form data to backend
        dispatch<any>(signUp(formData))
    };

    return (
        <>
            <Header />
            <main className="row relative">
                <div className="w-[30%] flex flex-col justify-center items-center h-screen">
                    <form onSubmit={handleSubmit} className="w-full rounded-lg shadow-lg p-8">
                        <h1 className="text-2xl font-medium mb-4">Sign Up</h1>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                                Username
                            </label>
                            <input type="text" name="username" id="username" required className="rounded-lg border px-3 py-2 w-full" onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input type="email" name="email" id="email" required className="rounded-lg border px-3 py-2 w-full" onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                                Password
                            </label>
                            <input type="password" name="password" id="password" required className="rounded-lg border px-3 py-2 w-full" onChange={handleChange} />
                        </div>
                        <button type="submit" className={`relative bg-blue-500 text-white px-10 py-2 rounded hover:bg-blue-600 ${isLoading ? "disable" : ""}`}>
                            {isLoading &&
                                <Spinner size={28} left={7} top={5} className="" />
                            }
                            Sign Up
                        </button>
                    </form>
                    <div className="w-full px-8 flex flex-row gap-10">
                        <p className="text-gray-200">
                            Do you have an account?
                        </p>
                        <Link href="/signin">Sign In</Link>
                    </div>
                </div>
            </main>
        </>


    );
};
