import { connect, connection, ConnectOptions } from "mongoose";

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

async function dbConnect() {
  if (!connection.readyState) {
    if (!process.env.NEXT_PUBLIC_MONGODB_URI) return;
    console.log("Connecting to DB...");
    connect(process.env.NEXT_PUBLIC_MONGODB_URI, options as ConnectOptions);
  }
}
export default dbConnect;
