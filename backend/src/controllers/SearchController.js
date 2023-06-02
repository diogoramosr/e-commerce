import Games from "../models/Games.js";
import Computers from "../models/Computers.js";
import Accessories from "../models/Accessories.js";

class SearchController {
  async index(req, res) {
    try {
      const searchTerm = req.query.q;

      if (!searchTerm) {
        return res.status(400).json({ message: "Search term not provided" });
      }

      const regex = new RegExp(searchTerm, "i");

      const games = await Games.find({ title: { $regex: regex } });
      const computers = await Computers.find({ title: { $regex: regex } });
      const accessories = await Accessories.find({ title: { $regex: regex } });

      const results = [...games, ...computers, ...accessories];

      if (Object.keys(results).every((key) => results[key].length === 0)) {
        return res.status(404).json({
          message: `No items found with your search term "${searchTerm}"`,
        });
      }

      return res.json(results);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}

export default new SearchController();
