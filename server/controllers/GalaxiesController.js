import { galaxiesService } from "../services/GalaxiesService.js";
import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/Galaxies')
    this.router
      .get('', this.getGalaxies)
      .get('/:galaxyId', this.getGalaxyById)
      .get('/:galaxyId/planets', this.getPlanetsByGalaxyId)
      .post('', this.createGalaxy)
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
  async getGalaxyById(req, res, next) {
    try {
      const galaxyId = req.params.galaxyId
      const galaxy = await galaxiesService.getGalaxyById(galaxyId)
      return res.send(galaxy)
    } catch (error) {
      next.error(error)
    }

  }
  async getPlanetsByGalaxyId(req, res, next) {
    try {
      const galaxyId = req.params.galaxyId
      const planets = await planetsService.getPlanetsByGalaxyId(galaxyId)
      return res.send(planets)
    } catch (error) {
      next.error(error)
    }
  }
  async createGalaxy(req, res, next) {
    try {
      const galaxyData = req.body
      const newGalaxy = await galaxiesService.createGalaxy(galaxyData)
      return res.send(newGalaxy)
    } catch (error) {
      next.error(error)
    }
  }
}