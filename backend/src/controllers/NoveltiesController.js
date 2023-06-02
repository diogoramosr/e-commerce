import Games from "../models/Games.js";
import Computers from "../models/Computers.js";
import Accessories from "../models/Accessories.js";

class NoveltiesController {
  async index(req, resp) {
    try {
      const games = await Games.find().sort({ createdAt: "desc" }).limit(6);
      const computers = await Computers.find()
        .sort({ createdAt: "desc" })
        .limit(6);
      const accessories = await Accessories.find()
        .sort({ createdAt: "desc" })
        .limit(6);

      const results = [...games, ...computers, ...accessories];

      resp.send(results);
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }
}

export default new NoveltiesController();
