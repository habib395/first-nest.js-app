import { MongoClient, ServerApiVersion }  from 'mongodb';

export const collectionNameObj = {
    blogCollection : "bg_platform",
    userCollection: "test_user",
    bookingCollection: "test_booking"
}

export default function dbConnect(collectionName){
    const uri = process.env.MONGO_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})
return client.db(process.env.DB_NAME).collection(collectionName)
}
