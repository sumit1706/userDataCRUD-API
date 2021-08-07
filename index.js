const express = require("express");
const app = express();
const connectDB = require("./connection");

//configuration
app.use(express.json());

//mongoose model
const userModel = require("/sandbox/user");

//route: /
//description: To get all user
//parameter: none
app.get("/", async (req, res) => {
  try {
    const user = await userModel.find();
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//route: /user/type/:type
//description: To get all user based on type
//parameter: type
app.get("/user/type/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const user = await userModel.find({ userType: type });
    if (!user) {
      res.json({ message: "No user found" });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//route: /user/:id
//description: To get user based on id
//parameter: id
app.get("/user/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await userModel.findById({ _id });
    if (!user) {
      res.json({ message: "No user found" });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//route: /user/new
//description: To add new user
//parameter: none
//request body: user body
app.post("/user/new", async (req, res) => {
  try {
    const { newUser } = req.body;
    await userModel.create(newUser);
    res.json({ message: "User Created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//route: /user/update/:_id
//description: To update user
//parameter: _id
//request body: user object
app.put("/user/update/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { userData } = req.body;
    const updateUser = await userModel.findByIdAndUpdate(
      _id,
      { $set: userData },
      { new: true }
    );
    res.json({ user: updateUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//route: /user/delete/:_id
//description: To delete a user
//parameter: _id
//request body: none
app.delete("/user/delete/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    await userModel.findByIdAndDelete(_id);
    res.json({ message: "User Deleted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//route: /user/delete/:userType
//description: To delete users of same Type
//parameter: userType
//request body: none
app.delete("/user/delete/type/:userType", async (req, res) => {
  try {
    const { userType } = req.params;
    await userModel.findOneAndDelete({ userType });
    res.json({ message: "Users Deleted!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  connectDB()
    .then(() => console.log("db connected"))
    .catch((error) => console.log(error));
});
