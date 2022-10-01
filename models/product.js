// import mongoose 
import mongoose from "mongoose";
 
// Create a Schema
const Product = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});
 
// export model
export default mongoose.model('Products', Product);