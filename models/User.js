const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      validate: {
        validator: (value) => {
          validator.isStrongPassword(value, {
            minLength: 6,
            minLowerCase: 3,
            minNumber: 1,
            minUppercase: 1,
            minSymbol: 1,
          });
        },
        message: "Password {VALUE} is not strong enough.",
      },
    },
    confirmPassword: {
      type: String,
      required: [true, "Please provide a confirm password."],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Password is not match",
      },
    },
    role: {
      type: String,
      enum: ["buyer", "store-manager", "admin"],
      default: "buyer",
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    contactNumber: {
      type: Number,
    },
    shippingAddress: String,
    imageURL: String,
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive", "blocked"],
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', function(next){
    const password=this.password;
    const hashedPassword=bcrypt.hashSync(password);
    this.password=hashedPassword;
    this.confirmPassword=undefined;
    next()
})

const User=mongoose.model('User',userSchema)

module.exports=User