const { Schema, model } = require('mongoose');


const reactionSchema = new mongoose.Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new Schema.Types.ObjectId,
        },

        reactionBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,

        },
    },
);

module.exports = reactionSchema;