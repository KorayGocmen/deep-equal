"use strict";

require("mocha");
var assert = require("assert");

var isDeepEqual = require("./index");

describe("deep equal", function() {
  describe("testing arrays", function() {
    it("should return true when arrays are equal", function() {
      var param1 = [1, 2, 3, 4];
      var param2 = [1, 2, 3, 4];
      var expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when arrays are both empty", function() {
      var param1 = [];
      var param2 = [];
      var expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when arrays have objects and are equal", function() {
      var param1 = [{ key: "val1", key2: "test" }, { key: "val2" }];
      var param2 = [{ key: "val1", key2: "test" }, { key: "val2" }];
      var expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when arrays have objects and are not equal", function() {
      var param1 = [{ key: "val1" }, { key: "val" }];
      var param2 = [{ key: "val1" }, { key: "DIFFERENT" }];
      var expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when arrays are not equal in size", function() {
      var param1 = [1, 2, 3, 4, 5];
      var param2 = [1, 2, 3, 4];
      var expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when arrays are equal in size both different in type", function() {
      var param1 = [1, 2, 3, 4, 5];
      var param2 = [1, 2, 3, 4, "5"];
      var expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when comparing arrays and objects", function() {
      var param1 = [1, 2, 3, 4, 5];
      var param2 = { key: "val" };
      var expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });
  });

  describe("testing objects", () => {
    it("should return true when object are equal", function() {
      var param1 = { key1: "val1", key2: "val2" };
      var param2 = { key1: "val1", key2: "val2" };
      var expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when objects are both empty", function() {
      var param1 = {};
      var param2 = {};
      var expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when objects have arrays as values and equal", function() {
      var param1 = { arr: [1, 2, 3] };
      var param2 = { arr: [1, 2, 3] };
      var expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when objects have arrays as values and not equal", function() {
      var param1 = { arr: [1, 2, 3] };
      var param2 = { arr: [1, 2, 3, 4] };
      var expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when objects are not equal in size", function() {
      var param1 = { key1: "val1", key2: "val2", key3: "val3" };
      var param2 = { key1: "val1", key2: "val2" };
      var expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when arrays are equal in size both different in type", function() {
      var param1 = { key1: 1, key2: "val2" };
      var param2 = { key1: "1", key2: "val2" };
      var expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when comparing objects and arrays", function() {
      var param1 = [1, 2, 3, 4, 5];
      var param2 = { key: "val" };
      var expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });
  });

  describe("testing numbers and strings", () => {
    it("should return true when strings are equal", function() {
      var param1 = "string1";
      var param2 = "string1";
      var expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when integers are equal", function() {
      var param1 = 1999;
      var param2 = 1999;
      var expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when floats are equal", function() {
      var param1 = 1999.9999;
      var param2 = 1999.9999;
      var expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when strings are not equal", function() {
      var param1 = "string12";
      var param2 = "string1";
      var expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when integers are not equal", function() {
      var param1 = 19999;
      var param2 = 1999;
      var expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when floats are not equal", function() {
      var param1 = 1999.9999;
      var param2 = 1999.99;
      var expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });
  });
});
