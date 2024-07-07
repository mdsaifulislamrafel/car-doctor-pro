let db;
export const connectDB = async () => {
    if (db) return db;
    try {
        const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2lraink.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db = client.db('car-doctor');
        return db
    } catch (err) {
        console.error(err);
    }
};