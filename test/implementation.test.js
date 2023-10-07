"use strict";

import { angryProfessor } from "../src/implementation/easy/angry-professor";
import { beautifulDays } from "../src/implementation/easy/beautiful-days-at-the-movies";
import { breakingRecords } from "../src/implementation/easy/breaking-best-and-worst-records";
import { camelcase } from "../src/implementation/easy/camelcase";
import { catAndMouse } from "../src/implementation/easy/cats-and-a-mouse";
import { chocolateFeast } from "../src/implementation/easy/chocolate-feast";
import { circularArrayRotation } from "../src/implementation/easy/circular-array-rotation";
import { countingValleys } from "../src/implementation/easy/counting-valleys";
import { cutTheSticks } from "../src/implementation/easy/cut-the-sticks";
import { designerPdfViewer } from "../src/implementation/easy/designer-pdf-viewer";
import { divisibleSumPairs } from "../src/implementation/easy/divisible-sum-pairs";
import { pageCount } from "../src/implementation/easy/drawing-book";
import { getMoneySpent } from "../src/implementation/easy/electronics-shop";
import { encryption } from "../src/implementation/easy/encryption";
import { equalizeArray } from "../src/implementation/easy/equality-in-a-array";
import { findDigits } from "../src/implementation/easy/find-digits";
import { gradingStudents } from "../src/implementation/easy/grading";
import { howManyGames } from "../src/implementation/easy/halloween-sale";
import { jumpingOnClouds } from "../src/implementation/easy/jumping-on-the-clouds-revisited";
import { kangaroo } from "../src/implementation/easy/kangaroo";
import { kaprekarNumbers } from "../src/implementation/easy/kaprekar-numbers";
import { libraryFine } from "../src/implementation/easy/library-fine";
import { workbook } from "../src/implementation/easy/lisa-workbook";
import { migratoryBirds } from "../src/implementation/easy/migratory-birds";
import { minimumDistances } from "../src/implementation/easy/minimum-distances";
import { permutationEquation } from "../src/implementation/easy/permutation-equation";
import { pickingNumbers } from "../src/implementation/easy/picking-numbers";
import { superReducedString } from "../src/implementation/easy/reduced-string";
import { saveThePrisoner } from "../src/implementation/easy/save-the-prisoner";
import { squares } from "../src/implementation/easy/sherlock-and-squares";
import { sockMerchant } from "../src/implementation/easy/sock-merchant";
import { viralAdvertising } from "../src/implementation/easy/strange-advertising";
import { strangeCounter } from "../src/implementation/easy/strange-code";
import { birthday } from "../src/implementation/easy/the-birthday-bar";
import { hurdleRace } from "../src/implementation/easy/the-hurdle-race";
import { utopianTree } from "../src/implementation/easy/utopian-tree";

import chai from "chai";

chai.expect();

const expect = chai.expect;
const test = it;

describe("Implementation", () => {
  describe("Easy", () => {
    test("Angry Professor", () => {
      expect(angryProfessor(3, [-1, -3, 4, 2])).to.eq("YES");
      expect(angryProfessor(2, [0, -1, 2, 1])).to.eq("NO");
    });

    test("Beautiful Days at the Movies", () => {
      expect(beautifulDays(20, 23, 6)).to.eq(2);
      expect(beautifulDays(13, 45, 3)).to.eq(33);
    });

    test("Breaking the Records", () => {
      expect(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])).to.deep.eq([
        2, 4,
      ]);
      expect(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])).to.deep.eq(
        [4, 0]
      );
    });

    test("CamelCase", () => {
      expect(camelcase("saveChangesInTheEditor")).to.eq(5);
    });

    test("Cats and a Mouse", () => {
      expect(catAndMouse(1, 2, 3)).to.eq("Cat B");
      expect(catAndMouse(1, 3, 2)).to.eq("Mouse C");
    });

    test("Chocolate Feast", () => {
      expect(chocolateFeast(10, 2, 5)).to.eq(6);
      expect(chocolateFeast(12, 4, 4)).to.eq(3);
      expect(chocolateFeast(6, 2, 2)).to.eq(5);
      expect(chocolateFeast(7, 3, 2)).to.eq(3);
    });

    test("Circular Array Rotation", () => {
      expect(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])).to.deep.eq([
        2, 3, 1,
      ]);
    });

    test("Counting Valleys", () => {
      expect(countingValleys(8, "UDDDUDUU")).to.eq(1);
      expect(countingValleys(12, "DDUUDDUDUUUD")).to.eq(2);
    });

    test("Cut the sticks", () => {
      expect(cutTheSticks([5, 4, 4, 2, 2, 8])).to.deep.eq([6, 4, 2, 1]);
      expect(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1])).to.deep.eq([8, 6, 4, 1]);
    });

    test("Designer PDF Viewer", () => {
      expect(
        designerPdfViewer(
          [
            1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 5,
          ],
          "abc"
        )
      ).to.eq(9);
      expect(
        designerPdfViewer(
          [
            1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 7,
          ],
          "zaba"
        )
      ).to.eq(28);
    });

    test("Divisible Sum Pairs", () => {
      expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).to.eq(5);
    });

    test("Drawing Book", () => {
      expect(pageCount(6, 2)).to.eq(1);
      expect(pageCount(5, 4)).to.eq(0);
    });

    test("Electronics Shop", () => {
      expect(getMoneySpent([3, 1], [5, 2, 8], 10)).to.eq(9);
      expect(getMoneySpent([4], [5], 5)).to.eq(-1);
    });

    test("Encryption", () => {
      expect(encryption("haveaniceday")).to.eq("hae and via ecy");
      expect(encryption("feedthedog")).to.eq("fto ehg ee dd");
      expect(encryption("chillout")).to.eq("clu hlt io");
    });

    test("Equalize the Array", () => {
      expect(equalizeArray).to.be.a("function");
      expect(equalizeArray([3, 3, 2, 1, 3])).to.eq(2);
      expect(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3])).to.eq(4);
    });

    test("Find Digits", () => {
      expect(findDigits).to.be.a("function");
      expect(findDigits(12)).to.eq(2);
      expect(findDigits(1012)).to.eq(3);
    });

    test("Grading Students", () => {
      expect(gradingStudents([73, 67, 38, 33])).to.deep.eq([75, 67, 40, 33]);
    });

    test("Halloween Sale", () => {
      expect(howManyGames(20, 3, 6, 80)).to.eq(6);
      expect(howManyGames(20, 3, 6, 85)).to.eq(7);
    });

    test("Jumping on the Clouds: Revisited", () => {
      expect(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)).to.eq(92);
      expect(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3)).to.eq(80);
    });

    test("Library Fine", () => {
      expect(libraryFine(9, 6, 2015, 6, 6, 2015)).to.eq(45);
    });

    test("Lisa's Workbook", () => {
      expect(workbook(5, 3, [4, 2, 6, 1, 10])).to.eq(4);
      expect(workbook(10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31])).to.eq(8);
    });

    test("Migratory Birds", () => {
      expect(migratoryBirds([1, 4, 4, 4, 5, 3])).to.eq(4);
      expect(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).to.eq(3);
    });

    test("Minimum Distances", () => {
      expect(minimumDistances([7, 1, 3, 4, 1, 7])).to.eq(3);
      expect(minimumDistances([1, 2, 3, 4, 10])).to.eq(-1);
    });

    test("Modified Kaprekar Numbers", () => {
      expect(kaprekarNumbers(1, 100)).to.eq("1 9 45 55 99");
      expect(kaprekarNumbers(100, 300)).to.eq("297");
    });

    test("Number Line Jumps", () => {
      expect(kangaroo(0, 3, 4, 2)).to.eq("YES");
      expect(kangaroo(0, 2, 5, 3)).to.eq("NO");
    });

    test("Picking Numbers", () => {
      expect(pickingNumbers([4, 6, 5, 3, 3, 1])).to.eq(3);
      expect(pickingNumbers([1, 2, 2, 3, 1, 2])).to.eq(5);
    });

    test("Sales by Match", () => {
      expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).to.eq(3);
      expect(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).to.eq(4);
      expect(sockMerchant(1, [9])).to.eq(0);
    });

    test("Save the Prisoner!", () => {
      expect(saveThePrisoner(5, 2, 1)).to.eq(2);
      expect(saveThePrisoner(5, 2, 2)).to.eq(3);
    });

    test("Sequence Equation", () => {
      expect(permutationEquation([2, 3, 1])).to.deep.eq([2, 3, 1]);
      expect(permutationEquation([4, 3, 5, 1, 2])).to.deep.eq([1, 3, 5, 4, 2]);
    });

    test("Sherlock and Squares", () => {
      expect(squares(24, 49)).to.eq(3);
      expect(squares(3, 9)).to.eq(2);
      expect(squares(17, 24)).to.eq(0);
      expect(squares(35, 70)).to.eq(3);
      expect(squares(100, 1000)).to.eq(22);
    });

    test("Strange Counter", () => {
      expect(strangeCounter(4)).to.eq(6);
      expect(strangeCounter(17)).to.eq(5);
    });

    test("Subarray Division", () => {
      expect(birthday([1, 2, 1, 3, 2], 3, 2)).to.eq(2);
      expect(birthday([1, 1, 1, 1, 1, 1], 3, 2)).to.eq(0);
      expect(birthday([4], 4, 1)).to.eq(1);
    });

    test("Super reduced string", () => {
      expect(superReducedString("aaabccddd")).to.eq("abd");
      expect(superReducedString("aa")).to.eq("Empty String");
      expect(superReducedString("baab")).to.eq("Empty String");
    });

    test("The Hurdle Race", () => {
      expect(hurdleRace(4, [1, 6, 3, 5, 2])).to.eq(2);
      expect(hurdleRace(7, [2, 5, 4, 5, 2])).to.eq(0);
    });

    test("Utopian Tree", () => {
      expect(utopianTree(0)).to.eq(1);
      expect(utopianTree(1)).to.eq(2);
      expect(utopianTree(2)).to.eq(3);
      expect(utopianTree(3)).to.eq(6);
      expect(utopianTree(4)).to.eq(7);
    });

    test("Viral Advertising", () => {
      expect(viralAdvertising(3)).to.eq(9);
      expect(viralAdvertising(4)).to.eq(15);
    });
  });
});
