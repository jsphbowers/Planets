import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/Galaxies')
    this.router
      .get('', this.getGalaxies)
  }
  async getGalaxies(req, res, next) {
    try {
      const query = req.query
      const galaxies = await galaxiesService.getGalaxies(query)
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }
}