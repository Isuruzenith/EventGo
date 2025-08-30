
import User from '@/app/models/User/User';
import { dbConnect } from '@/lib/db';

export default async function HomePage() {
  await dbConnect();
  const users = await User.find().lean();

  return (
    <main>
      <h2>User List</h2>
          <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user: any) => (
                    <tr key={user._id.toString()}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{new Date(user.createdAt).toLocaleString()}</td>
                      <td>{new Date(user.updatedAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
    </main>
  );
}