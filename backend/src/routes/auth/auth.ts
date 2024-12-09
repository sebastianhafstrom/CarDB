import express from "express";
import { User } from "../../entity/auth/user";

const router = express.Router();

router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await User.find({
      where: { email },
      select: ["id", "email", "role", "password"],
    });
    if (users.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const user = users[0];

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    delete user.password;

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export { router as authRouter };
