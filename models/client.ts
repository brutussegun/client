import mongoose from 'mongoose';

const Schema = mongoose.Schema


const ClientSchema = new Schema({
    name: {type: String, required: true, nullable: false, trim: true},
    userId: {type: Schema.Types.ObjectId, ref: "user", required: true},
    address: {type: String, required: true, nullable: false, trim: true},
    email: {type: String},
    phone: {type: String},
    rate: {type: Number, required: true, nullable: false, trim: true},
    rate_cap: {type: Number},
    billing_period: {type: String, required: true, nullable: false, trim: true},
}, {
    timestamps: true,
});

const Client = mongoose.model("client", ClientSchema);
module.exports = Client;
