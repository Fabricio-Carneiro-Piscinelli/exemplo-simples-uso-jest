const datas = require('../data/data.json');

//filter
var Filter = require('../functions/filterFuncs.js');

var CarsController = {

    getAll : () => { 
        return datas;
    },
    getName : ( value ) => { 
        return Filter.FilterName(datas, value);
    },
    getBrand : ( value ) => { 
        return Filter.FilterBrand(datas, value);
    },
    getYear : ( value ) => { 
        return Filter.FilterYear(datas, value);
    },
    getType : ( value ) => { 
        return Filter.FilterType(datas, value);
    }
};

module.exports = CarsController;
