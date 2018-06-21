"use strict";

var isDeepEqual = (param1, param2) => {
  if (param1.constructor !== param2.constructor) return false;

  if (param1.constructor === Array) {
    if (param1.length !== param2.length) return false;
    for (var i = 0; i < param1.length; i++) {
      if (param1[i].constructor === Array || param1[i].constructor === Object) {
        return isDeepEqual(param1[i], param2[i]);
      } else if (param1[i] !== param2[i]) return false;
    }
  } else if (param1.constructor === Object) {
    if (Object.keys(param1).length !== Object.keys(param2).length) return false;
    for (var i = 0; i < Object.keys(param1).length; i++) {
      var key = Object.keys(param1)[i];
      if (
        param1[key].constructor === Array ||
        param1[key].constructor === Object
      ) {
        return isDeepEqual(param1[key], param2[key]);
      } else if (param1[key] !== param2[key]) return false;
    }
  } else if (param1.constructor == String || param1.constructor == Number) {
    return param1 === param2;
  }
  return true;
};

module.exports = isDeepEqual;
