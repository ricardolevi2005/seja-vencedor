const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')


describe ('ONG', ()=> {
  beforeEach(async ()=>{
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('Tem que ser possível criar uma ONG', async ()=> {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "CASA DA MAE JOANA",
        email: "contato@maejoana.com.br",
        whatsapp: "2191234567",
        city: "Rio de Janeiro",
        uf: "RJ"
      })

     expect(response.body).toHaveProperty('id')
     expect(response.body.id).toHaveLength(8)

  })
})