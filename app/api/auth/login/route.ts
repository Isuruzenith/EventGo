
import { NextRequest, NextResponse } from 'next/server';
import User from '@/app/models/User/User';
import { dbConnect } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
	await dbConnect();
	const { email, password } = await req.json();
	if (!email || !password) {
		return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
	}
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
		}

		return NextResponse.json({ message: 'Login successful.', role: user.role });
	} catch (err) {
		return NextResponse.json({ error: 'Login failed.' }, { status: 500 });
	}
}
