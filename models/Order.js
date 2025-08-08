const mongoose = require('mongoose');

const lineItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  sku: { type: String },
  total_discount: { type: Number, default: 0 },
  title: { type: String },
  quantity: { type: Number, required: true },
  variant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Variant' },
  vendor_name: { type: String },
  vendor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  shipping_address: {
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
}, { _id: true });

const orderSchema = new mongoose.Schema({
  order_id: { type: String, unique: true, required: true },
  cancel_reason: { type: String, default: null },
  cancel_at: { type: Date, default: null },
  contact_email: { type: String },
  created_at: { type: Date, default: Date.now },
  email: { type: String },
  name: { type: String },
  order_number: { type: String, required: true },
  payment_gate_way: { type: String },
  phone: { type: String },
  total_discounts: { type: Number, default: 0 },
  total_price: { type: Number, required: true },
  total_tax: { type: Number, default: 0 },
  billing_address: {
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },

  customer: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
  },

  line_items: [lineItemSchema],
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
