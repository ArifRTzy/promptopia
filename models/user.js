import { Schema, model, models } from "mongoose";
//Schema: to craete or define new structure of mongoDB document, like a new table on mySQL.
//model: to create a Mongoose model based on a schema. It is a schema wrapper aka it is the collection cloud.mongodb.com
//models: Represents the models that have already been registered with Mongoose. This is used to prevent redefining models.

const UserSchema = new Schema({
    email: {//create field named email
        type: String,//define the type of email field to string
        unique: [true, "Email is already exists!"],//Ensures that the email can only used by one user, if the email is reuse by other user it will return "Email is already exists!"
        required: [true, "Email is required!"]//Specify that the email field is mandatory aka use have to fill the email field, if not it will return "Email is required"
    },
    username:{//create field named username
        type:String,//define the username field's type to string
        required: [true, "Username is required!"],//define that the username field is mandatory
        match: [/^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 5-20 alphanumeric letters and be unique!"],//To validate that the username has to be around 5-20 characters long, can only contain alphanumeric characters underscores(_) and dots(.), cant end with dot or underscore, if the username does not meet the criterias it will return the error message
    },
    image:{//create field named image
        type: String,//define the image field to string
    }
})

const User = models.User || model("User", UserSchema)//it will create a model named User, if the User already exists it will return models.User to prevent redefining model. it is like User ? models.User : model("User", UserSchema)

export default User //exports the User model allowing other components to use it like creating, updating, or deleting users
