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
  utopianTree,
  angryProfessor,
  beautifulDays,
  viralAdvertising,
  saveThePrisoner,
  circularArrayRotation,
  permutationEquation,
  migratoryBirds,
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

test("Utopian Tree", () => {
  expect(utopianTree).to.be.a("function");
  expect(utopianTree(0)).to.eq(1);
  expect(utopianTree(1)).to.eq(2);
  expect(utopianTree(2)).to.eq(3);
  expect(utopianTree(3)).to.eq(6);
  expect(utopianTree(4)).to.eq(7);
});

test("Angry Professor", () => {
  expect(angryProfessor).to.be.a("function");
  expect(angryProfessor(3, [-1, -3, 4, 2])).to.eq("YES");
  expect(angryProfessor(2, [0, -1, 2, 1])).to.eq("NO");
});

test("Beautiful Days at the Movies", () => {
  expect(beautifulDays).to.be.a("function");
  expect(beautifulDays(20, 23, 6)).to.eq(2);
  expect(beautifulDays(13, 45, 3)).to.eq(33);
});

test("Viral Advertising", () => {
  expect(viralAdvertising).to.be.a("function");
  expect(viralAdvertising(3)).to.eq(9);
  expect(viralAdvertising(4)).to.eq(15);
});

test("Save the Prisoner!", () => {
  expect(saveThePrisoner).to.be.a("function");
  expect(saveThePrisoner(5, 2, 1)).to.eq(2);
  expect(saveThePrisoner(5, 2, 2)).to.eq(3);
});

test("Circular Array Rotation", () => {
  expect(circularArrayRotation).to.be.a("function");
  expect(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])).to.deep.eq([2, 3, 1]);
});

test("Sequence Equation", () => {
  expect(permutationEquation).to.be.a("function");
  expect(permutationEquation([2, 3, 1])).to.deep.eq([2, 3, 1]);
  expect(permutationEquation([4, 3, 5, 1, 2])).to.deep.eq([1, 3, 5, 4, 2]);
});

test("Migratory Birds", () => {
  expect(migratoryBirds).to.be.a("function");
  expect(migratoryBirds([1, 4, 4, 4, 5, 3])).to.eq(4);
  expect(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).to.eq(3);
});
