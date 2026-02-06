import { isMongoId } from '~~/server/utils/is-mongo-id';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  if (!id) {
    throw createError({
      statusCode: 404,
      statusMessage: 'users/put id not found',
    });
  }
  if (!isMongoId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'users/put invalid id',
    });
  }

  const body = await readBody(event);
  // TODO validate body before pushing
  const user = await User.findByIdAndUpdate(id, body);
  if (user) {
    const u = user.toObject();
    delete u.__v;
    return u;
  }
  else {
    throw createError({
      statusCode: 400,
      statusMessage: 'users/put did not return a user',
    });
  }
});
