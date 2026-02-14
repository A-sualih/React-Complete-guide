const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb+srv://Food_order:Food_order@cluster0.qlbd31t.mongodb.net/Food_order');
        console.log("Mongo DB connected");
    } catch(error){
        console.error("Database connection error",error.message)
        process.exit(1);
    }
}

module.exports=connectDB;