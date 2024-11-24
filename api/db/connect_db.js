// for food_app db ------------------------------------------------------------
// password = v3swKWYJT651aa7u
// user = shivapal9063
// pass_strng = mongodb+srv://shivapal9063:v3swKWYJT651aa7u@cluster0.efte9.mongodb.net/

import mongoose from "mongoose"

const connect_db = async () =>{
   try {
     await mongoose.connect(process.env.MONGO_URI) 
     console.log("mongo db connected successfully ");
   } catch (error) {
    console.log(error)
   }
}
export default connect_db;