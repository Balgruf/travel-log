// import { betterAuth } from "better-auth";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import { getMongoClient } from "./database";

// export async function auth() {
//     const client = await getMongoClient();

//     const authInstance = betterAuth({
//         database: mongodbAdapter(client),
//         // emailAndPassword: { enabled: true },
//         // plugins: [
//         //     passkey(),      // Passwordless & Biometrics
//         //     multiSession()  // Concurrent device management
//         // ]
//         socialProviders: {
//             github: {
//                 clientId: env.GITHUB_CLIENT_ID as string,
//                 clientSecret: env.GITHUB_CLIENT_SECRET as string,
//             },
//         },
//     });
//     return authInstance
// }

import { betterAuth } from 'better-auth';
import env from './env';

export const auth = betterAuth({
  // ...other options
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: env.GITHUB_CLIENT_ID as string,
      clientSecret: env.GITHUB_CLIENT_SECRET as string,
    },
  },
});
