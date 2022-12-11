import { User } from "../models/user/user.model.js";
// import { sendWelcomeMessage } from "../emails/accounts.js";

export const signUpUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    const token = await newUser.generateAuthToken();

    res.status(200).send({ newUser, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await User.findByCredentials(email, password);
    if (!user) throw new Error("Error: User not found");
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(401).send(error.message);
  }
};

export const logoutUser = async (req, res) => {
  console.log("logout");
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

export const logoutAll = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
};

export const getUserProfile = async (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch {
    res.status(400).send("userFound");
  }
};

export const deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    res.status(200).send(req.user);
  } catch (error) {
    res.status(404).send("Error: User not found");
  }
};

export const editProfile = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
};
export const updateScore = async (req, res) => {
  try {
    console.log(req.user);
    const user = req.user;
    user.score = req.body.score + user.score;
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
  }
};
