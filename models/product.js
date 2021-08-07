const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: {
        type: String,
        required: true,

    },
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    imgSrc: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,

    },
    inStock: {
        type: Schema.Types.Boolean,
        required: true
    }

}, { timestamps: true });

const Product = mongoose.model("products", productSchema);

module.exports = Product;
