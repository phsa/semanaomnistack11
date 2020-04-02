const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connections')


describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create an ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Bicho Cuidado2",
                email: "bichocuidado2@mail.com",
                whatsapp: "88999990001",
                city: "Crateús",
                uf: "CE"
            })


        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})