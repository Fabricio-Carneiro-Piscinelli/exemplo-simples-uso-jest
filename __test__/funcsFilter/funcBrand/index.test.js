var CarsController = require('../../../controllers/cars.js');

test('brand equal to volkswagen', () => {
  expect( CarsController.getBrand("volkswagen") ).toEqual(
    expect.arrayContaining([
      expect.objectContaining(
          {
            "name" : "Gol", 
            "brand" : "volkswagen",
            "year" : "2011",
            "type" : "car"
          }
      )
    ])
  )
});
