const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new mongoose.Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,

        },

        createdAt: {
            type: Date,
            defualt: Date.now,
        },
        

        username: {
            type: String,
            required: true,
        },

        // reaction schema
        reactions: {
           type: [reactionSchema], 
        },
        
        createdAt: { 
            type: Date,
            default: Date.now,
        } 
    },

    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//thought schema
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;