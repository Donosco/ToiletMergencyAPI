import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import supertest, * as request from 'supertest';
import { ToiletModule } from '../src/toilet.module';
import exp from 'constants';

describe('Toilet API)', () => {
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
    const response = await httpRequester.get('/toilettes').expect(200);

    expect(response.body).toEqual(expect.any(Array));
  });
});
