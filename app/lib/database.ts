import { defineMongooseConnection } from '#nuxt/mongoose';

export async function getMongoClient() {
  const conn = defineMongooseConnection(env.MONGODB_URI);
  return conn.getClient().db('better-auth');
}
