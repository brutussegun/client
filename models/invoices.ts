import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const InvoiceSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
        clientId: {
            type: Schema.Types.ObjectId,
            ref: "client",
            nullable: false,
        },
        units: {
            type: Number,
            required: true,
            nullable: false,
        },
        cycle: {
            type: String,
            required: true,
            nullable: false,
        },
        amount: {
            type: Number,
            required: true,
            nullable: false,
        },
        unitsOverLimit: {
            type: Number,
            required: true,
        },
        overage: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: ["Pending", "Not Paid", "Paid"],
        },
        start: {
            type: Date,
            required: true,
        },
        end: {
            type: Date,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

const Invoice = mongoose.model("invoice", InvoiceSchema);
module.exports = Invoice;


