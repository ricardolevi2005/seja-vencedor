const generateUniqueId = require ('../../src/utils/generateUniqueId')

describe('Gerar um único ID', () => {
  it('precisa gerar um único ID', () => {
    const id = generateUniqueId()
    
    expect(id).toHaveLength(8)


  })
})