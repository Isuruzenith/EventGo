import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: 'Student' | 'Organizer' | 'Admin' | 'Dean' | 'DVC' | 'VC' | 'University Management';
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['Student', 'Organizer', 'Admin', 'Dean', 'DVC', 'VC', 'University Management'],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);