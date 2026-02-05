export default defineEventHandler({
  handler: async () => {
    return User.find();
  },
});
