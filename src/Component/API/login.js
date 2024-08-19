import { authenticateUser } from "../../utils/auth";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const token = authenticateUser(username, password);

    if (token) {
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
