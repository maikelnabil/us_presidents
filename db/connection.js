var mongoose  = require("mongoose");

var PresidentSchema = new mongoose.Schema(
  {
    name: String,
    year: Number
  }
);

mongoose.model("President", PresidentSchema);

if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGOLAB_URI);
}else{
  mongoose.connect("mongodb://localhost/us_president");
}

module.exports = mongoose;
