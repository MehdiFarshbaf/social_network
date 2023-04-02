import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect("mongodb://localhost:27017/social_network", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected`);
    } catch (err) {
        console.log(err)
    }
}

export default connectDB