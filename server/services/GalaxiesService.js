import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
  async getGalaxies(query) {
    const galaxies = await dbContext.Galaxies.find(query)
    return galaxies
  }

}

export const galaxiesService = new GalaxiesService()