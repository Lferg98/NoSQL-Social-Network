const { Schema, model } = require('mongoose');

const userSchema = new mongoose.Schema (
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: true
        },

        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/],
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    
    {
        toJSON: {
            getters: true,
        },
        
    }
);

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;