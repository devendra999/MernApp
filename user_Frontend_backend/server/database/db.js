import mongoose from "mongoose"; // it is used for connect to database

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@mern-user.gwzqe.mongodb.net/?retryWrites=true&w=majority`;

  try {
    // 1 - Current URL string parser is deprecated, and will be removed in a future version.
    // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

    await mongoose.connect(URL, {
      useUnifiedTopology: true, // this is set default
      useNewUrlParser: true, // this is set default
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
