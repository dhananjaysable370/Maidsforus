const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    businessId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business',
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

const businessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contactPerson: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    images: [{
        url: {
            type: String,
            required: true
        }
    }]
});

const Booking = mongoose.model('Booking', bookingSchema);
const Business = mongoose.model('Business', businessSchema);

module.exports = { Booking, Business };
