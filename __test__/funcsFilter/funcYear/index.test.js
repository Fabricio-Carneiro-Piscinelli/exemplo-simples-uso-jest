var CarsController = require('../../../controllers/cars.js');

test('year equal to 2011', () => {
  expect( CarsController.getYear("2011") ).toMatchObject([
      {
        "name" : "Gol", 
        "brand" : "volkswagen",
        "year" : "2011",
        "type" : "car"
      }
  ]);
});