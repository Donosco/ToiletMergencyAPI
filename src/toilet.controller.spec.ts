import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import supertest  from 'supertest';
import { ToiletModule } from './toilet.module';

describe('Toilet API', () => {
  let app: INestApplication;
  let httpRequester : supertest.SuperTest<supertest.Test>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ToiletModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
    console.log(typeof httpRequester);
    const response = await httpRequester.get('/toilettes').expect(200);

    expect(response.body).toEqual(expect.any(Array));
  });
});
