const mongoose = require('mongoose');

const Schema = mongoose.Schema
const Model = mongoose.model

const UserSchema = new Schema({
        name: {
            type: String,
            required: true,
            nullable: false,
            trim: true
        },
        email: {
            type: String,
            required: true,
            nullable: false,
            unique: true,
            index: true
        },
        password: {
            type: String,
            nullable: false,
            required: true,
        },

    }, {timestamps: true})
;

const User = mongoose.models.user || mongoose.model("user", UserSchema);

export default User


