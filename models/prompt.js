import {Schema, model, models} from "mongoose";//import Schema to create a new model structure for mongoDB, model to create a model on mongoDB aka to wrap the Schema, models to prevent redefining the model

const PromptSchema = new Schema({//create a new schema named PromptSchema
    creator: {//create a field named creator
        type: Schema.Types.ObjectId,//to create a reference (relationship) between documents in different collections. This is similar to a foreign key in relational databases. Create an unique indetifiers within mongoDB, it can be used to like only the user that can delete it's own post
        ref: 'User',//get reference from another model named User
    },
    prompt: {//create a field named prompt
        type: String,//define the type to string
        required: [true, 'Prompt is required.']//set the field is mandatory that means it has to exists when creating a model if not it will return an error
    },
    tag: {//create field named tag
        type: String,//set to string
        required: [true, 'Tag is required.']//set the field to required
    }
})

const Prompt = models.Prompt || model('Prompt', PromptSchema) //create a model named Prompt if the model already exists it will return the Prompt model aka not redefining the model

export default Prompt;//export the Prompt to create, update, or delete the prompts
