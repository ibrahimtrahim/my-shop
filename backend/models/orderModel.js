import mongoose from "mongoose";
import Product from "./productModel";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    orderItems: [
        {
        name: { type: String, require: true,},
        qty: { type: Number, require: true,},
        image: { type: String, require: true,},
        price: { type: Number, require: true,},
        Product: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "Product",
        }
        }
    ],
    shippingAdress: {
        address: { type: String, require: true,},
        city: { type: String, require: true,},
        postalCode: { type: String, require: true,},
        country: { type: Number, require: true,},
    },
    paymentMethod: {
        type: String,
        require: true,
    },
    paymentResult: {
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email_addres: {type: String},
    },
    itemsPrice: {
        type: Number,
        require: true,
        default: 0.0,
    },
    taxPrice: {
        type: Number,
        require: true,
        default: 0.0,
    },
    shippingPrice: {
        type: Number,
        require: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        require: true,
        default: 0.0,
    },
    isPaid: {
        type: Boolean,
        require: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        require: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    },
}, {
    timestamps: true,
});

const Order = mongoose.model("Order", orderSchema);

export default Order;