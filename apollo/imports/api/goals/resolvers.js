// imports/api/goals/resolvers.js
import { isNullOrUndefined } from 'util';
import Goals from './goals';

export default {
  Mutation: {
    createGoal(obj, { name, resolutionId }, context)
    {
      const { userId } = context;
      if (isNullOrUndefined(userId)) throw new Error('Unauthorized create goal');
      const goalId = Goals.insert({
        name,
        resolutionId,
        completed: false,
      });
      return Goals.findOne(goalId);
    },
    toggleGoal(obj, { _id })
    {
      const goal = Goals.findOne(_id);
      Goals.update(_id, {
        $set: {
          completed: !goal.completed,
        },
      });
      return Goals.findOne(_id);
    },
  },
};
