const request = require('supertest');
const express = require('express');

const app = express();
app.get('/health', (req, res) => {
  res.status(200).send('Healthy!');
});

describe('GET /health', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
  });
});