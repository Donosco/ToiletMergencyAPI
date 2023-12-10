import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import supertest  from 'supertest';
import * as request from 'supertest';
import { ToiletModule } from './toilet.module';

describe('Toilet API', () => {
  let app: INestApplication;
  let httpRequester: supertest.SuperTest<supertest.Test>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ToiletModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    httpRequester = request(app.getHttpServer());
  });

  it('/ (GET)', async () => {
    const response = await httpRequester.get('/toilettes').expect(200);

    expect(response.body).toEqual(expect.any(Array));
  });

  it('/ (POST)', async () => {
    const response = await httpRequester
    .post('/toilettes')
    .send ({
      Commune:  "Gardanne",
      Code_Postal: "13120",
      PointGeo: {
        lon: 5.465,
        lat: 43.452,
      },
      Id: "763910b0-5c3c",
      Longitude: "5.465",
      OpeningHours: "24/7",
    })
    .expect(201);

    expect(response.body).toEqual({
      Commune:  "Gardanne",
      Code_Postal: "13120",
      PointGeo: {
        lon: 5.465,
        lat: 43.452,
      },
      Id: "763910b0-5c3c",
      Longitude: "5.465",
      OpeningHours: "24/7",
    });
  });

  it('/ (PUT)', async () => {
    const response1 = await httpRequester
    .post('/toilettes')
    .send ({
      Commune:  "Gardanne",
      Code_Postal: "13120",
      PointGeo: {
        lon: 5.465,
        lat: 43.452,
      },
      Id: "763910b0-5c3c",
      Longitude: "5.465",
      OpeningHours: "24/7",
    })
    .expect(201);


    const response = await httpRequester
    .put('/toilettes/763910b0-5c3c')
    .expect(200);

    expect(response.body).toEqual({
      Commune:  "Gardanne",
      Code_Postal: "13120",
      PointGeo: {
        lon: 5.465,
        lat: 43.452,
      },
      Id: "763910b0-5c3c",
      Longitude: "5.465",
      OpeningHours: "24/7",
      isFavorite: true,
    });
  });

  it('/ (DELETE)', async () => {
    const response1 = await httpRequester
    .post('/toilettes')
    .send ({
      Commune:  "Gardanne",
      Code_Postal: "13120",
      PointGeo: {
        lon: 5.465,
        lat: 43.452,
      },
      Id: "763910b0-5c3c",
      Longitude: "5.465",
      OpeningHours: "24/7",
    })
    .expect(201);

    const response = await httpRequester
    .delete('/toilettes/763910b0-5c3c')
    .expect(200);

    expect(response.body).toEqual({
      message: "Toilet deleted",
    });
  });

  it('/ (GET by ID)', async () => {
    const response = await httpRequester
    .post('/toilettes')
    .send ({
      Commune:  "Gardanne",
      Code_Postal: "13120",
      PointGeo: {
        lon: 5.465,
        lat: 43.452,
      },
      Id: "763910b0-5c3c",
      Longitude: "5.465",
      OpeningHours: "24/7",
    })
    .expect(201);

    const response1 = await httpRequester.get('/toilettes/763910b0-5c3c').expect(200);
    expect(response1.body).toEqual({
      Commune:  "Gardanne",
      Code_Postal: "13120",
      PointGeo: {
        lon: 5.465,
        lat: 43.452,
      },
      Id: "763910b0-5c3c",
      Longitude: "5.465",
      OpeningHours: "24/7",
    });
  });

  it('/ (POST search by commune)', async () => {
    const response = await httpRequester
    .post('/toilettes')
    .send ({
      Commune:  "Gardanne",
      Code_Postal: "13120",
      PointGeo: {
        lon: 5.465,
        lat: 43.452,
      },
      Id: "763910b0-5c3c",
      Longitude: "5.465",
      OpeningHours: "24/7",
    })
    .expect(201);

    const response1 = await httpRequester
    .post('/toilettes/search/commune')
    .send ({
      Commune:  "Gardanne",
    })
    .expect(201);

    expect(response1.body).toEqual([{
      Commune:  "Gardanne",
      Code_Postal: "13120",
      PointGeo: {
        lon: 5.465,
        lat: 43.452,
      },
      Id: "763910b0-5c3c",
      Longitude: "5.465",
      OpeningHours: "24/7",
    }]);

  });

  it('/Get (GET favorites)', async () => {
    const response = await httpRequester
    .post('/toilettes')
    .send ({
      Commune:  "Gardanne",
      Code_Postal: "13120",
      PointGeo: {
        lon: 5.465,
        lat: 43.452,
      },
      Id: "763910b0-5c3c",
      Longitude: "5.465",
      OpeningHours: "24/7",
    })
    .expect(201);

    const response1 = await httpRequester
    .put('/toilettes/763910b0-5c3c')
    .expect(200);

    const response2 = await httpRequester.get('/toilettes?favorites=1').expect(200);
    expect(response2.body).toEqual([{
      Commune:  "Gardanne",
      Code_Postal: "13120",
      PointGeo: {
        lon: 5.465,
        lat: 43.452,
      },
      Id: "763910b0-5c3c",
      Longitude: "5.465",
      OpeningHours: "24/7",
      isFavorite: true,
    }]);
  });
});
