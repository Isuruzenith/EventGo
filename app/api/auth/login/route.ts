
import { NextRequest, NextResponse } from 'next/server';
import User from '@/app/models/User/User';
import { dbConnect } from '@/lib/db';

export async function POST(req: NextRequest) {
	await dbConnect();
	const { email } = await req.json();
	if (!email) {
		return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
	}
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
		}
		// In a real app, you would check password and issue a session/token here
		return NextResponse.json({ message: 'Login successful.', user });
	} catch (err) {
		return NextResponse.json({ error: 'Login failed.' }, { status: 500 });
	}
}
