const {mongoose}=require('./../config');
const serviceSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      image: {
        type:String,
        default:''
      },
    },{ timestamps: true });
module.exports = mongoose.model("Service", serviceSchema);
