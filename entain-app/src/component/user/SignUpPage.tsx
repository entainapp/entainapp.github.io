import { useState } from 'react';

interface SignUpForm {
    username: string;
    email: string;
    password: string;
}

export const SignUpPage = (): JSX.Element => {
    const [formData, setFormData] = useState<SignUpForm>({ username: '', email: '', password: '' });

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
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-2xl font-medium mb-4">Sign Up</h1>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                        Username
                    </label>
                    <input type="text" name="username" id="username" className="border px-3 py-2 w-full" onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                    </label>
                    <input type="email" name="email" id="email" className="border px-3 py-2 w-full" onChange={handleChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                        Password
                    </label>
                    <input type="password" name="password" id="password" className="border px-3 py-2 w-full" onChange={handleChange} />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Sign Up
                </button>
            </form>
        </div>
    );
};
