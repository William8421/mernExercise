import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (v) =>
              v.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
            message: (props) => `${props.value} is not a valid email`,
          },
    },
    password: {
        type: String,
        required: true
    },
    id: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)

export default User