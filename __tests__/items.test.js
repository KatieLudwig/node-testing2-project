const request = require('supertest');
const server = require('../server');
const db = require('../data/db-config');

beforeEach(async () => {
  await db.migrate.rollback(); 
  await db.migrate.latest();   
  await db.seed.run();         
});

afterAll(async () => {
    await db.destroy();
})

describe('Items Endpoints', () => {
  it('should fetch all items', async () => {
    const res = await request(server).get('/api/items');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should create a new item', async () => {
    const res = await request(server)
      .post('/api/items')
      .send({ name: 'NewItem', description: 'New description' });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('NewItem');
  });

  it('should delete an item', async () => {
    const res = await request(server).delete('/api/items/1');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Item deleted');
  });
});

