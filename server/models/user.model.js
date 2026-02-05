import { defineMongooseModel } from '#nuxt/mongoose';

export const User = defineMongooseModel({
  name: 'User',
  schema: {
    name: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    emailVerified: {
      type: 'boolean',
      required: true,
    },
  },
  options: {
    timestamps: true,
  },
  hooks() {

  },
});
