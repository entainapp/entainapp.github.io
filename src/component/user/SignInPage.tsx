import Link from 'next/link';
import { useState } from 'react';
import { Header } from '../ui';

interface SignInForm {
    email: string;
    password: string;
}

export const SignInPage = (): JSX.Element => {
    const [formData, setFormData] = useState<SignInForm>({ email: '', password: '' });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(formData);
        // Add logic to submit form data to backend
    };

    return (
        <>
            <main className="main relative">
                <Header />
                <div className="center relative ease-in duration-1000 transition-all">
                    <div className="flex flex-col justify-center items-center h-screen">
                        <form onSubmit={handleSubmit} className="w-1/3 rounded-lg shadow-lg p-8">
                            <h1 className="text-2xl font-medium mb-4">Sign In</h1>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input type="email" name="email" id="email" className="rounded-lg border px-3 py-2 w-full" onChange={handleChange} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                                    Password
                                </label>
                                <input type="password" name="password" id="password" className="rounded-lg border px-3 py-2 w-full" onChange={handleChange} />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Sign In
                            </button>
                        </form>
                        <div className="w-1/3 px-8 flex flex-row gap-10">
                            <p className="text-gray-200">
                                Do you have not an account?
                            </p>
                            <Link href="/signup">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>

    );
};
