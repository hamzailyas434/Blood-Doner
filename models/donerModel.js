const mongoose = require("mongoose");
const donerScheme = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    requires: [true, `A Doner must have a Name`],
  },
  blood_group: {
    type: String,
    trim: true,
    requires: [true, `A Doner must have a Blood Group`],
  },
  last_donation_date: {
    type: String,
    trim: true,
    requires: [true, `A Doner must have a Last Donation Date`],
  },
  contact_no: {
    type: Number,
    requires: [true, `A Doner must have a Contact Number`],
  },
  cnic: {
    type: Number,
    requires: [true, `A Doner must have a CNIC`],
  },
  location: {
    type: String,
    trim: true,
    requires: [true, `A Doner must have a Location`],
  },
  city: {
    type: String,
    trim: true,
    requires: [true, `A Doner must have a City Name`],
  },
});

const Doner = mongoose.model("Doner", donerScheme);
module.exports = Doner;
