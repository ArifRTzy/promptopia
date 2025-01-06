import mongoose from "mongoose";

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)//will throw errors when the query is incorrect e.g "emial". If set to false the errors will be get ignored

    if(isConnected){
        console.log('MongoDB is already connected')
        return;//return will stops the function imediately without the return the code below will executed
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {//use to connect to the mongoDB database
            dbName: "share-promt",//database name
            useNewUrlParser: true,//Ensures Mongoose uses the latest connection string parser for compatibility with MongoDB 4+.
            useUnifiedTopology: true,//Enables the new unified topology layer, improving connection stability, performance, and behavior consistency.
        })

        isConnected = true

        console.log('MongoDB is connected')
    } catch (error) {
        console.log(error)
    }
}
