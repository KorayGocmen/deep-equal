"use strict";

require("mocha");
const assert = require("assert");

const isDeepEqual = require("./index");

describe("deep equal", () => {
  describe("testing arrays", () => {
    it("should return true when arrays are equal", function () {
      const param1 = [1, 2, 3, 4];
      const param2 = [1, 2, 3, 4];
      const expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when arrays are both empty", function () {
      const param1 = [];
      const param2 = [];
      const expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when arrays are not equal in size", function () {
      const param1 = [1, 2, 3, 4, 5];
      const param2 = [1, 2, 3, 4];
      const expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when arrays are equal in size both different in type", function () {
      const param1 = [1, 2, 3, 4, 5];
      const param2 = [1, 2, 3, 4, "5"];
      const expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when comparing arrays and objects", function () {
      const param1 = [1, 2, 3, 4, 5];
      const param2 = { key: "val" };
      const expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });
  });

  describe("testing objects", () => {
    it("should return true when object are equal", function () {
      const param1 = { key1: "val1", key2: "val2" };
      const param2 = { key1: "val1", key2: "val2" };
      const expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when objects are both empty", function () {
      const param1 = {};
      const param2 = {};
      const expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when objects are not equal in size", function () {
      const param1 = { key1: "val1", key2: "val2", key3: "val3" };
      const param2 = { key1: "val1", key2: "val2" };
      const expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when arrays are equal in size both different in type", function () {
      const param1 = { key1: 1, key2: "val2" };
      const param2 = { key1: "1", key2: "val2" };
      const expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when comparing objects and arrays", function () {
      const param1 = [1, 2, 3, 4, 5];
      const param2 = { key: "val" };
      const expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });
  });

  describe("testing numbers and strings", () => {
    it("should return true when strings are equal", function () {
      const param1 = "string1";
      const param2 = "string1";
      const expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when integers are equal", function () {
      const param1 = 1999;
      const param2 = 1999;
      const expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when floats are equal", function () {
      const param1 = 1999.9999;
      const param2 = 1999.9999;
      const expectedResult = true;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return false when strings are not equal", function () {
      const param1 = "string12";
      const param2 = "string1";
      const expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when integers are not equal", function () {
      const param1 = 19999;
      const param2 = 1999;
      const expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });

    it("should return true when floats are not equal", function () {
      const param1 = 1999.9999;
      const param2 = 1999.99;
      const expectedResult = false;
      assert.equal(isDeepEqual(param1, param2), expectedResult);
    });
  });
});
