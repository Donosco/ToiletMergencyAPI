import { Injectable, OnModuleInit } from '@nestjs/common';
import { Toilette } from './Toilette';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map, tap } from 'rxjs';
import { ToiletteAPI } from './ToiletteAPI';

@Injectable()
export class AppService implements OnModuleInit{
  private readonly toilettes = new Map<String, Toilette>();

  constructor(private readonly httpService : HttpService) {}

  async onModuleInit() {
    await this.fetchToilettesFromServer();
    console.log(`We have ${this.toilettes.size} toilettes`);
  }

  private async fetchToilettesFromServer() : Promise<void> {
    return firstValueFrom(
      this.httpService.get('https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/fr-toilettes-publiques@ampmetropole/records?limit=20').pipe(
        map((response) => response.data),
        tap((toilets : ToiletteAPI[]) => {
          toilets.forEach((toilet) => 
           this.addToilette({
              Id: toilet.id,
              Commune: toilet.commune,
              Code_Postal: toilet.code_postal,
              PointGeo: [toilet.point_geo.lat, toilet.point_geo.lon],
              Longitude: toilet.lon,
              OpeningHours: toilet.tags_opening_hours,
            }),
          );
        }),
        map(() => undefined),
      ),
    );
  }

  addToilette(toilette: Toilette): void {
    this.toilettes.set(toilette.Id, toilette);
  }

  getAllToilettes(): Array<Toilette> {
    return Array.from(this.toilettes.values());
  }

}
