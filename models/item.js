const {mongoose}=require('./../config');

const itemSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
    },
  price:{
    type:Number,
    required:true
    },
  image: {
    type:String,
    default:''
    }
  },{ timestamps: true });

module.exports=mongoose.model("Item",itemSchema)


