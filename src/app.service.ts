import { Injectable, OnModuleInit } from '@nestjs/common';
import { Toilette } from './Toilette';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map, tap } from 'rxjs';
import { ToiletteAPI } from './ToiletteAPI';
import { cp } from 'fs';

/**
 * 
 */
@Injectable()
export class AppService implements OnModuleInit{
  private readonly toilettes = new Map<String, Toilette>();

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
      this.httpService.get('https://data.opendatasoft.com/api/records/1.0/search/?dataset=fr-toilettes-publiques%40ampmetropole&rows=590')
      .pipe(
        map((response) => response.data),
        tap((toilets) => {
          toilets.records.forEach(toilet => 
           this.addToilette({
              Id: toilet.recordid,
              Commune: toilet.fields.commune,
              Code_Postal: toilet.fields.code_postal,
              PointGeo: [toilet.fields.point_geo[0], toilet.fields.point_geo[1]],
              Longitude: toilet.fields.lon,
              OpeningHours: toilet.fields.tags_opening_hours,
              isFavorite: false,
            }),
          );
        }),
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
   * Add a toilette to favorites 
   * @param id 
   */
  updateFavorite(id: string) {
    const toilette = this.toilettes.get(id);
    if (toilette) {
      toilette.isFavorite = !toilette.isFavorite;
    }
  }

  /**
   * Remove a toilette from the storage
   * @param id 
   */
  remove(id: string) {
    this.toilettes.delete(id);
  }

}
