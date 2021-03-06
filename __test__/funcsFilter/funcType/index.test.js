var CarsController = require('../../../controllers/cars.js');

test('Type equal to car ', () => {
  expect( CarsController.getType("car") ).toEqual(
    expect.arrayContaining([
        expect.objectContaining({
        "name" : "Gol", 
        "brand" : "volkswagen",
        "year" : "2011",
        "type" : "car"
      })
		])
  );
});
