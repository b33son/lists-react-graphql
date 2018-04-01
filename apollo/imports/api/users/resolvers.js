// imports/api/users/resolvers.js

export default {
  Query: {
    user(obj, args, context)
    {
      const { user } = context;
      return user || {};
    },
  },
  User: {
    email: user => user.emails[0].address,
  },
};
