// imports/api/resolutions/resolvers.js
import { isNullOrUndefined } from 'util';
import Resolutions from './resolutions';
import Goals from '../goals/goals';

export default {
  Query: {
    resolutions(obj, args, context)
    {
      const { userId } = context;
      console.log('USERID');
      console.log(userId);
      if (isNullOrUndefined(userId))
      {
        return [];
      }
      return Resolutions.find({ userId }).fetch();
    },
  },
  Resolution: {
    goals: resolution =>
      Goals.find({
        resolutionId: resolution._id,
      }).fetch(),
    completed: (resolution) =>
    {
      const goals = Goals.find({
        resolutionId: resolution._id,
      }).fetch();

      if (goals.length === 0) return false;
      const completedGoals = goals.filter(goal => goal.completed);
      return completedGoals.length === goals.length;
      // for (let i = 0; i < goals.length; i++)
      // {
      //   if (!goals[i].completed) return false;
      // }
      // return true;
    },
  },
  Mutation: {
    createResolution(
      obj,
      { name },
      context, // eslint-disable-line
    )
    {
      const { userId } = context;
      if (isNullOrUndefined(userId)) throw new Error('Unauthorized');
      const resolutionId = Resolutions.insert({
        name,
        userId,
      });
      return Resolutions.findOne(resolutionId);
    },
  },
};
