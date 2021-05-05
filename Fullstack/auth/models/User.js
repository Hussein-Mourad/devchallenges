const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto")


const checkBio = (bio) => {
  return bio <= 100;
};
const checkPhone = (phone) => {
  /*  
    starts with \ or + or (numbers from 0 to 9) 
    then whitespaces or . or - then 3 numbers 
    then whitespaces or . or - then 3 to 5 numbers 
    then end of line 
  */
  // https://ihateregex.io/expr/phone
  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim;
  const result = phone.match(pattern);
  if (result === null) {
    return false;
  }
  return true;
};
const checkPassword = (password) => {
  // https://ihateregex.io/expr/password
  // must contain at least one uppercase letter and one lowercase and one number
  const pattern = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/gm;
  const result = password.match(pattern);
  console.log("result: ", result);
  if (result === null) {
    return false;
  }
  return true;
};

const userSchema = new mongoose.Schema(
  {
    authId: {
      type: String,
      unique:true,
      required: true,
      default: crypto.randomBytes(32).toString("hex")
    },
    name: String,
    bio: {
      type: String,
      validate: [checkBio, "Bio must be less than 100 characters"],
    },
    phone: {
      type: Number,
      validate: [checkPhone, "Please enter a valid phone number"],
    },
    photo: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Please enter an email"],
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minLength: [8, "Minimum length is 8 characters"],
      validate: [checkPassword, "Please enter a valid password"],
    },
  },
  { timestamps: true }
);

userSchema.index({ email: "text" });

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to login a user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
  }
  throw Error("Incorrect email or password");
};

var User = mongoose.model("User", userSchema);

module.exports = User;
