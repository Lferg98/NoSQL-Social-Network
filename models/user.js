const { Schema, model } = require('mongoose');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: "Missing Username"
        },

        email: {
            type: String,
            unique: true,
            required: "Missing Email",
            match: [/.+@.+\..+/],
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thought",
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
            virtuals: true,
        },
        id: false,
    }
);

UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;