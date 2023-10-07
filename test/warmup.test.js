"use strict";

import { aVeryBigSum } from "../src/warmup/easy/a-very-big-sum";
import { birthdayCakeCandles } from "../src/warmup/easy/birthday-cake-candles";
import { compareTriplets } from "../src/warmup/easy/compare-the-triplets";
import { diagonalDifference } from "../src/warmup/easy/diagonal-difference";
import { simpleArraySum } from "../src/warmup/easy/simple-array-sum";
import { solveMeFirst } from "../src/warmup/easy/solve-me-first";
import { timeConversion } from "../src/warmup/easy/time-conversion";

import chai from "chai";

chai.expect();

const expect = chai.expect;
const test = it;

describe("Warmup", () => {
  describe("Easy", () => {
    test("A Very Big Sum", () => {
      expect(
        aVeryBigSum([
          1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
        ])
      ).to.eq(5000000015);
    });

    test("Birthday Cake Candles", () => {
      expect(birthdayCakeCandles([3, 2, 1, 3])).to.eq(2);
      expect(
        birthdayCakeCandles([7, 8, 2, 1, 6, 8, 3, 6, 2, 2, 7, 8, 2])
      ).to.eq(3);
      expect(birthdayCakeCandles([1, 1, 1])).to.eq(3);
    });

    test("Compare the Triplets", () => {
      expect(compareTriplets([5, 6, 7], [3, 6, 10])).to.deep.eq([1, 1]);
    });

    test("Diagonal Difference", () => {
      expect(
        diagonalDifference([
          [11, 2, 4],
          [4, 5, 6],
          [10, 8, -12],
        ])
      ).to.eq(15);
    });

    test("Simple Array Sum", () => {
      expect(simpleArraySum([1, 2, 3, 4, 10, 11])).to.eq(31);
    });

    test("Solve Me First", () => {
      expect(solveMeFirst(2, 3)).to.eq(5);
      expect(solveMeFirst(100, 1000)).to.eq(1100);
    });

    test("Time Conversion", () => {
      expect(timeConversion("07:05:45PM")).to.eq("19:05:45");
      expect(timeConversion("09:45:05PM")).to.eq("21:45:05");
      expect(timeConversion("06:37:11AM")).to.eq("06:37:11");
      expect(timeConversion("12:00:00AM")).to.eq("00:00:00");
      expect(timeConversion("12:00:00PM")).to.eq("12:00:00");
    });
  });
});
