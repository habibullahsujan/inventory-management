const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const supplierSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide your name."],
      maxLength: 100,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid email."],
      lowerCase: true,
      trim: true,
      unique: true,
    },
    brand: {
      name: {
        type: String,
        trim: true,
        required: true,
      },
      id: {
        type: ObjectId,
        required: true,
        ref: "Brand",
      },
    },
    contactNumber: 
      {
        type: String,
        required: [true, "Provide a contact number."],
        validate: {
          validator: (value) => {
            return validator.isMobilePhone(value);
          },
          message: "Your provided mobile number is incorrect.",
        },
      },
    emergencyContactNumber: {
      type: String,
      required: [true, "Provide a emergency contact number."],
      validate: {
        validator: (value) => {
          return validator.isMobilePhone(value);
        },
        message: "Provided emergency contact number is incorrect.",
      },
    },
    tradeLicenseNumber: {
      type: Number,
      required: [true, "Provide your trade license number."],
    },
    presentAddress: {
      type: String,
      required: [true, "Provide your present address."],
    },
    permanentAddress: {
      type: String,
      required: [true, "Provide your permanent address."],
    },
    location: {
      type: String,
      lowerCase: true,
      required: true,
      enum: {
        values: [
          "dhaka",
          "chattogram",
          "rajshahi",
          "sylhet",
          "khulna",
          "barishal",
          "rangpur",
          "mymensingh",
        ],
        message: "{VALUE} is not a valid name",
      },
    },

    imageURL: {
      type: String,
      // required: true,
      // validate: {
      //   validator: (value) => {
      //     if (!Array.isArray(value)) {
      //       return false;
      //     }
      //     let isValid = true;
      //     value.forEach((url) => {
      //       if (!validator.isURL(url)) {
      //         isValid = false;
      //       }
      //     });
      //     return isValid;
      //   },
      //   message: "Please provide valid image urls",
      // },
    },
    nationalIdImageURL: {
      type: String,
      // required: true,
      // validate: {
      //   validator: (value) => {
      //     if (!Array.isArray(value)) {
      //       return false;
      //     }
      //     let isValid = true;
      //     value.forEach((url) => {
      //       if (!validator.isURL(url)) {
      //         isValid = false;
      //       }
      //     });
      //     return isValid;
      //   },
      //   message: "Please provide valid image urls",
      // },
    },
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive", "discontinued"],
    },
  },
  { timestamp: true }
);

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
