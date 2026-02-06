import mongoose from 'mongoose';

export const isMongoId = (id: string) => mongoose.Types.ObjectId.isValid(id);
