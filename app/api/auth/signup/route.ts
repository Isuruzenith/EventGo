
import { NextRequest, NextResponse } from 'next/server';
import User from '@/app/models/User/User';
import { dbConnect } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
	await dbConnect();
	const { name, email, password, role } = await req.json();
	if (!name || !email || !password || !role) {
		return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
	}
	try {
		// Check for existing user
		const existing = await User.findOne({ email });
		if (existing) {
			return NextResponse.json({ error: 'Email already registered.' }, { status: 409 });
		}

        const hashedPassword = await bcrypt.hash(password, 10);


		const user = await User.create({ name, email, password: hashedPassword, role });
		return NextResponse.json({ message: 'User registered successfully.', user });
	} catch (err) {
		return NextResponse.json({ error: 'Registration failed.' }, { status: 500 });
	}
}
