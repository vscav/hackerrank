"use strict";

import {
  gradingStudents,
  kangaroo,
  breakingRecords,
  divisibleSumPairs,
  getMoneySpent,
  catAndMouse,
  hurdleRace,
  designerPdfViewer,
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

test("Electronics Shop", () => {
  expect(getMoneySpent).to.be.a("function");
  expect(getMoneySpent([3, 1], [5, 2, 8], 10)).to.eq(9);
  expect(getMoneySpent([4], [5], 5)).to.eq(-1);
});

test("Cats and a Mouse", () => {
  expect(catAndMouse).to.be.a("function");
  expect(catAndMouse(1, 2, 3)).to.eq("Cat B");
  expect(catAndMouse(1, 3, 2)).to.eq("Mouse C");
});

test("The Hurdle Race", () => {
  expect(hurdleRace).to.be.a("function");
  expect(hurdleRace(4, [1, 6, 3, 5, 2])).to.eq(2);
  expect(hurdleRace(7, [2, 5, 4, 5, 2])).to.eq(0);
});

test("Designer PDF Viewer", () => {
  expect(designerPdfViewer).to.be.a("function");
  expect(
    designerPdfViewer(
      [
        1,
        3,
        1,
        3,
        1,
        4,
        1,
        3,
        2,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
      ],
      "abc"
    )
  ).to.eq(9);
  expect(
    designerPdfViewer(
      [
        1,
        3,
        1,
        3,
        1,
        4,
        1,
        3,
        2,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        7,
      ],
      "zaba"
    )
  ).to.eq(28);
});
