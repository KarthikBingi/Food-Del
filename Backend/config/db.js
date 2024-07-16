import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bingikarthik2022:Bingi123@cluster0.tdi6nmq.mongodb.net/food-del')
    .then(() => console.log("DB connected"))
}