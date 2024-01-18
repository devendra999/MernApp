// import { ObjectID } from "bson";
import User from "../schema/userSchema.js";
// import { ObjectId } from "mongodb";

// Get all users
export const getUsers = async (request, response) => {
  try {
    const users = await User.find();
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// Save data of the user in database
export const addUser = async (request, response) => {
  const user = request.body;

  const newUser = new User(user); // check for request data as per our schema
  try {
    await newUser.save(); // save in database, save it is a mongodb function
    response.status(201).json(newUser); // here we create status code and newUser is response body
  } catch (error) {
    response.status(409).json({ message: error.message }); // create status code, send message
  }
};

// Get a user by id
export const getUserById = async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// Edit data in database
export const editUser = async (request, response) => {
  const userId = request.params.id;
  const updatedUserData = request.body;

  try {
    // Check if the user with the specified ID exists
    const existingUser = await User.findById(userId);

    if (!existingUser) {
      return response.status(404).json({ message: "User not found" });
    }

    // Update user data based on fields in the request body
    for (const [key, value] of Object.entries(updatedUserData)) {
      existingUser[key] = value;
    }

    // Save the updated user
    await existingUser.save();

    response.status(200).json(existingUser);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// deleting data of user from the database
export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });
    response.status(201).json("User deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
