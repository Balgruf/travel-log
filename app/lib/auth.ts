import { betterAuth } from 'better-auth';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import mongoose from 'mongoose';

import env from './env';

const client = mongoose.connection.getClient();
const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID as string,
      clientSecret: env.GITHUB_CLIENT_SECRET as string,
    },
  },
});
