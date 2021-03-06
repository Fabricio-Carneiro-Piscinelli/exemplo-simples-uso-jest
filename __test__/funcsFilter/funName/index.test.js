var CarsController = require('../../../controllers/cars.js');

test('Name equal to Gol ', () => {
  expect( CarsController.getName("Gol") ).toMatchObject([
      {
        "name" : "Gol", 
        "brand" : "volkswagen",
        "year" : "2011",
        "type" : "car"
      }
  ]);
});