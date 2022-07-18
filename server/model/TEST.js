import mongoose from "mongoose";

const testSchema = mongoose.Schema({
    name: String,
    date: {
        type: Date,
        default: new Date()
    }
})

const Test = mongoose.model('Test', testSchema)

export default Test