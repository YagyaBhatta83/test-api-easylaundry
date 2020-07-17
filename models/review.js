const {mongoose}=require('./../config');

const reviewSchema=new mongoose.Schema({
  message:{
    type:String
    },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    }
  },{ timestamps: true });

module.exports=mongoose.model("Review",reviewSchema)


