var express = require('express');
var router = express.Router();
var CarsController = require('../controllers/cars.js');

router.get('/all', (req, res, next) => {
    res.json(CarsController.getAll());
});

router.get('/all/name/:value', (req, res, next) => {
    res.json(CarsController.getName(req.params.value));
});

router.get('/all/brand/:value', (req, res, next) => {
    res.json(CarsController.getBrand(req.params.value));
});

router.get('/all/year/:value', (req, res, next) => {
    res.json(CarsController.getYear(req.params.value));
});

router.get('/all/type/:value', (req, res, next) => {
    res.json(CarsController.getType(req.params.value));
});

module.exports = router;
