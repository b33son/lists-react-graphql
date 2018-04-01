// imports/api/resolutions/resolutions.js
import { Mongo } from 'meteor/mongo'; // eslint-disable-line

const Resolutions = new Mongo.Collection('resolutions');
export default Resolutions;
