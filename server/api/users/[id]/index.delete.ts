import { isMongoId } from '~~/server/utils/is-mongo-id';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  if (!id) {
    throw createError({
      statusCode: 404,
      statusMessage: 'users/delete id not found',
    });
  }
  if (!isMongoId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'users/delete invalid id',
    });
  }

  const user = await User.findById(id);
  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: 'users/delete did not find that user',
    });
  }
  const r = await User.findByIdAndDelete(id);
  // TODO parse r
  return {
    message: 'user deleted',
    response: r,
  };
});
