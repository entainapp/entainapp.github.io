import { hash } from 'bcrypt';
import { connectToDatabase } from '../../libs/mongodb';


export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
        return;
    }

    const { username, email, password } = req.body;

    // Input validation
    if (!username || !email || !password) {
        res.status(400).json({ message: 'Invalid input' });
        return;
    }

    // Hash the password before storing
    const hashedPassword = await hash(password, 10);

    // Connect to MongoDB using the provided utility function
    const { db } = await connectToDatabase();

    // Check if the user already exists
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
        res.status(409).json({ message: 'Email address is already in use' });
        return;
    }

    // Create a new user document and insert it into the database
    const newUser = {
        username,
        email,
        password: hashedPassword,
    };
    await db.collection('users').insertOne(newUser);

    res.status(201).json({ message: 'User created successfully' });
}
