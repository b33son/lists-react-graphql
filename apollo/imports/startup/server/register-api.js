// imports/startup/server/register-api.js
import { createApolloServer } from 'meteor/apollo'; // eslint-disable-line
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';
import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import GoalsSchema from '../../api/goals/Goal.graphql';
import UsersSchema from '../../api/users/User.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers';
import UsersResolvers from '../../api/users/resolvers';
import GoalsResolvers from '../../api/goals/resolvers';

// asdfasdfasdfasf

const resolvers = merge(ResolutionsResolvers, UsersResolvers, GoalsResolvers);
const typeDefs = [ResolutionsSchema, UsersSchema, GoalsSchema];

const schema = makeExecutableSchema({
  typeDefs, // typeDefs : typeDefs
  resolvers, // resolvers : resolvers
});

createApolloServer({ schema }); //  http://localhost:3000/graphiQL
