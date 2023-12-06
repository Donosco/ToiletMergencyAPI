import { Injectable, OnModuleInit } from '@nestjs/common';
import { Toilette } from './Toilette';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map, tap } from 'rxjs';
import { ToiletteAPI } from './ToiletteAPI';

/**
 * 
 */
@Injectable()
export class ToiletService implements OnModuleInit{
  private readonly toilettes = new Map<String, Toilette>();
  private readonly favorites = new Map<String, Toilette>();

  constructor(private readonly httpService : HttpService) {}

  /**
   * Function that runs when the module is initialized
   */
  async onModuleInit() {
    await this.fetchToilettesFromServer();
    console.log(`We have ${this.toilettes.size} toilettes`);
  }
  /**
   * Function to fetch toilettes from the server (API)
   * @returns 
   */
  private async fetchToilettesFromServer() : Promise<void> {
    return firstValueFrom(
      this.httpService.get('https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/fr-toilettes-publiques@ampmetropole/records?limit=100')
      .pipe(
        map((response) => response.data.results),
        tap((toilets1 : ToiletteAPI[]) => {
          console.log(Array.isArray(toilets1));
          toilets1.forEach(toilet => 
           this.addToilette({
              Id: toilet.id,
              Commune: toilet.commune,
              Code_Postal: toilet.code_postal,
              PointGeo: toilet.point_geo,
              Longitude: toilet.lon,
              OpeningHours: toilet.tags_opening_hours,
              isFavorite: false,
            }),
          );
        }),
        map(() => undefined),
      ),
    );
  }

  /**
   * Function to add a toilet to the storage
   * @param toilette 
   */
  addToilette(toilette: Toilette): void {
    //Firsd we check if the toilette is already in the storage
    if (this.toilettes.has(toilette.Id)) {
      throw new Error('Toilette already exists');
    }else{
      this.toilettes.set(toilette.Id, toilette);
    }
  }

  /**
   *  Get all toilettes that return all the toilets in current storage
   * @param id 
   */
  getAllToilettes(): Array<Toilette> {
    return Array.from(this.toilettes.values());
  }

  /**
   * Get a toilette by its id
   * @param id 
   * @returns 
   */
  getToilet(id: string): Toilette {
    return this.toilettes.get(id);
  }

  /**
   * Add a toilette to favorites 
   * @param id 
   */
  updateFavorite(id: string) {
    const toilette = this.favorites.get(id);
    if(toilette) {
      toilette.isFavorite = !toilette.isFavorite;
      this.favorites.delete(id);
    }
    else {
      const t = this.toilettes.get(id);
      if(t) {
        t.isFavorite = true;
        this.favorites.set(id, t);
      }
    }
    return toilette.isFavorite;
  }

  /**
   * Remove a toilette from the storage
   * @param id 
   */
  remove(id: string) {
    this.toilettes.delete(id);
  }

  /**
   * Search a toilette by its commune
   * @param commune 
   * @returns 
   */
  searchByCommune(commune: string) {
    return Array.from(this.toilettes.values()).filter(toilette => toilette.Commune === commune);
  }

  /**
   * Get all the favorites toilettes
   * @returns 
   */
  getFavorites() : Array<Toilette> {
    return Array.from(this.favorites.values());
  }

}
