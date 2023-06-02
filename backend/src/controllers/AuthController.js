import Yup from "yup";
import bcrypt from "bcrypt";
import { loginService, generateToken } from "../services/auth.js";

class AuthController {
  async login(req, resp) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
      });

      const { email, password } = req.body;

      if (!(await schema.isValid(req.body))) {
        return resp.status(400).json({ error: "Validation Failure" });
      }

      const user = await loginService(email);

      if (!user) {
        return resp
          .status(404)
          .json({ message: "User or Password not invalid" });
      }

      const passwordIsValid = bcrypt.compareSync(password, user.password);

      if (!passwordIsValid) {
        return resp
          .status(404)
          .json({ message: "User or Password not invalid" });
      }

      const token = generateToken(user.id);

      resp.send({ id: user.id, name: user.name, token });
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }
}

export default new AuthController();
