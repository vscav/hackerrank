"use strict";

import {
  gradingStudents,
  kangaroo,
  breakingRecords,
  divisibleSumPairs,
} from "../src/implementation/implementation";

import chai from "chai";

chai.expect();
const expect = chai.expect;

const test = it;

test("Grading Students", () => {
  expect(gradingStudents).to.be.a("function");
  expect(gradingStudents([73, 67, 38, 33])).to.deep.eq([75, 67, 40, 33]);
});

test("Number Line Jumps", () => {
  expect(kangaroo).to.be.a("function");
  expect(kangaroo(0, 3, 4, 2)).to.eq("YES");
  expect(kangaroo(0, 2, 5, 3)).to.eq("NO");
});

test("Breaking the Records", () => {
  expect(breakingRecords).to.be.a("function");
  expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).to.deep.eq([2, 4]);
  expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).to.deep.eq([
    4,
    0,
  ]);
});

test("Divisible Sum Pairs", () => {
  expect(divisibleSumPairs).to.be.a("function");
  expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).to.eq(5);
});
