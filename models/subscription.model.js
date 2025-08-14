import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription name is required'],
        trim: true,     
        minlength: 2,
        maxlength: 100,
    },
    price: {
        type: Number,
        required: [true, 'Subscription price is required'],
        min: [0, 'Price must be grater than or equal to 0'],
    },

    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP', 'INR', 'AUD'], // Add more currencies as needed
        default: 'USD',
    },

    frequency: {
        type: String,   
        enum: ['daily','weekly','monthly', 'yearly'],
    },

    category: {
        type: String,   
        enum : ['entertainment', 'utilities', 'software', 'health', 'education', 'other'],
        required: [true, 'Subscription category is required'],
    },

    paymentMethod: {
        type: String,
        required:true,
        trim: true,
    },

    status: {
        type: String,
        enum: ['active', 'cancelled', 'expired'],
        default: 'active',
    },

    startDate: {
        type: Date,
        default: Date.now, 
    },


}, options, {timestamps: true});