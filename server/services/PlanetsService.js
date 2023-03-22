import { dbContext } from "../db/DbContext.js";

class PlanetsService {
  async getPlanetsByGalaxyId(galaxyId) {
    const planets = await dbContext.Planets.find({ galaxyId })
    return planets
  }
  async createPlanet(planetData) {
    const planet = await dbContext.Planets.create(planetData)
    return planet
  }

}

export const planetsService = new PlanetsService();