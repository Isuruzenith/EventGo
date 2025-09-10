
import { NextRequest, NextResponse } from 'next/server';
import User from '@/app/models/User/User';
import { dbConnect } from '@/lib/db';

export async function POST(req: NextRequest) {
	await dbConnect();
	const { name, email } = await req.json();
	if (!name || !email) {
		return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
	}
	try {
		// Check for existing user
		const existing = await User.findOne({ email });
		if (existing) {
			return NextResponse.json({ error: 'Email already registered.' }, { status: 409 });
		}
		const user = await User.create({ name, email });
		return NextResponse.json({ message: 'User registered successfully.', user });
	} catch (err) {
		return NextResponse.json({ error: 'Registration failed.' }, { status: 500 });
	}
}
