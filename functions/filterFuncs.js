
var funcFilter = (dt, param, value ) => {
    return dt.filter((item) => {
        return item[param] == value;
    });
}
var Filter = {
    FilterName : ( inp, value ) => {
        return funcFilter(inp, "name", value);
    },
    FilterBrand : ( inp, value ) => {
        return funcFilter(inp, "brand", value);
    },
    FilterYear : ( inp, value ) => {
        return funcFilter(inp, "year", value);
    },
    FilterType : ( inp, value ) => {
        return funcFilter(inp, "type", value);
    }
}

module.exports = Filter;