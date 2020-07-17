const {mongoose}=require('./../config');

const scheduleSchema = new mongoose.Schema({
  date:{
    type:String,
    required:true
    },
  time:{
    type:String,
    required:true
  },
  location:{
      type:String,
      required:true
    },
    noofitem:{
      type:String,
      required:true
    },
  status:{
      type:String,
      default:'processing'
    },
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
  service:{
    type:String,
    required: true
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }
},{ timestamps: true });


module.exports=mongoose.model("Schedule",scheduleSchema)