'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');


/**
 * User Schema
 */
var ProjectsSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    linkUrl: {
        type: String,
        required: false
    },
    imgPath: {
        type: String,
        required: true
    },
    thumbPath: {
      type: String,
      required: true
    },
    projectTitle: {
      type: String,
      required: true
    },
    technology: {
      type: String,
      required: true
    },
    projectSummary: {
      type: String,
      required: true
    },
    minDesc: {
      type: String,
      required: true
    },
    projId: {
      type: String,
      required: true
    }
});

mongoose.model('projects', ProjectsSchema);
