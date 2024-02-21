const request = require('supertest');
const server = 'http://localhost:3000';

//using supertest to test the server functionality

describe('Route integration', () => {
    describe('/', () => {
        describe('GET', () => {
            it('responds with 200 status and I think text/html content type', () => {
                return request(server)
                .get('/')
                .expect('Content-Type', /text\/html/)
                .expect(200)
            })
        })
    })
})