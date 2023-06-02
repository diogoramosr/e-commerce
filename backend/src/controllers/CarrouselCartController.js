import Games from "../models/Games.js";
import Computers from "../models/Computers.js";

class CarrouselCartController {
  async index(req, resp) {
    try {
      const games = await Games.find().sort({ createdAt: "desc" }).limit(5);
      const computers = await Computers.find()
        .sort({ createdAt: "desc" })
        .limit(5);
      const results = [...games, ...computers];
      resp.send(results);
    } catch (error) {
      resp.status(500).send({ message: error.message });
    }
  }
}

export default new CarrouselCartController();
