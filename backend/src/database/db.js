import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Conectado ao banco de dados..."))
    .catch((error) => console.log(error));
};

export default connectDatabase;
