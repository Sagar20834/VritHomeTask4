import { verifyToken } from "../../utils/auth";

export default function handler(req, res) {
  const token = req.headers.authorization?.split(" ")[1];
  const user = verifyToken(token);

  if (user) {
    res.status(200).json({ user });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
