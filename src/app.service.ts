import { Injectable, OnModuleInit } from '@nestjs/common';
import { Toilette } from './Toilette';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map, tap } from 'rxjs';
import { ToiletteAPI } from './ToiletteAPI';
import { cp } from 'fs';

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
            }),
          );
        }),
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
