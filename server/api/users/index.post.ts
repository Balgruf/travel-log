export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  // TODO validate body before pushing
  const user = await User.create(body);
  const u = user.toObject();
  delete u.__v;
  return u;
});
