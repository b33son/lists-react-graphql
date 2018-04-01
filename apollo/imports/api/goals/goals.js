// imports/api/goals/goals.js
import { Mongo } from 'meteor/mongo'; // eslint-disable-line

const Goals = new Mongo.Collection('goals');
export default Goals;
