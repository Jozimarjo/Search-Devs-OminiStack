const parseStringAsArray = (arrayAsString) => arrayAsString.split(',').map(tech => tech.trim());
module.exports = parseStringAsArray;