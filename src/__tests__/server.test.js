import 'regenerator-runtime/runtime'

const app = require('../server/server.js');
const supertest = require('supertest');
const request = supertest(app);

describe('Test endpoint', () => {
    test('Get 200 server response', async done => {
        const res = await request.get('/')

        expect(res.status).toBe(200)
       
        done()
    })
})