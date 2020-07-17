const {mongoose}=require('./../config');

const userSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    image: {
      type:String,
      default:''
    },
    admin:{
        type:Boolean,
        default:false
    }
  },{ timestamps: true });

module.exports = mongoose.model("User", userSchema);
