var utils = {};

utils.ready = function (fn) {
  document.onreadystatechange = function () {
   if (document.readyState == "complete") {
      fn()
   }
  }
}

utils.transform = function (constants, mappings) {
  return Object.keys(mappings).map(function (k) {
    return [constants[k], mappings[k]];
  })
};

module.exports = utils;
