import { expect, it } from 'vitest'
import { checkRowLength, defineBoxes, defineColumns, validateArray, validateGameBoard } from '../utils/sudoku'

// 测试 checkRowLength 函数
it('returns true if length of input arrray is 9', () => {
    // 定义一个有9个值的数组
    const testRow = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const shortRow = [1, 2, 3, 4, 5, 6, 7];
    const longRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(checkRowLength(testRow)).toBe(true)
    expect(checkRowLength(shortRow)).toBe(false);
    expect(checkRowLength(longRow)).toBe(false);
})

// 测试 defineColumns 函数
const inputArray = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [2, 4, 6, 8, 9, 7, 5, 3, 1],
    [1, 3, 5, 7, 9, 8, 6, 4, 2],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [2, 4, 6, 8, 9, 7, 5, 3, 1],
    [1, 3, 5, 7, 9, 8, 6, 4, 2],
    [5, 4, 3, 2, 1, 6, 7, 8, 9],
];

const expectedArray = [
    [1, 9, 2, 1, 1, 9, 2, 1, 5],
    [2, 8, 4, 3, 2, 8, 4, 3, 4],
    [3, 7, 6, 5, 3, 7, 6, 5, 3],
    [4, 6, 8, 7, 4, 6, 8, 7, 2],
    [5, 5, 9, 9, 5, 5, 9, 9, 1],
    [6, 4, 7, 8, 6, 4, 7, 8, 6],
    [7, 3, 5, 6, 7, 3, 5, 6, 7],
    [8, 2, 3, 4, 8, 2, 3, 4, 8],
    [9, 1, 1, 2, 9, 1, 1, 2, 9],
];
it('returns s sorted array of column arrays', () => {
    // 对每个数组进行 Stringify，并确保它们匹配
    expect(JSON.stringify(defineColumns(inputArray))).toEqual(JSON.stringify(expectedArray))
})

// 测试 defineBoxes 函数
const input = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [2, 4, 6, 8, 9, 7, 5, 3, 1],
    [1, 3, 5, 7, 9, 8, 6, 4, 2],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [2, 4, 6, 8, 9, 7, 5, 3, 1],
    [1, 3, 5, 7, 9, 8, 6, 4, 2],
    [5, 4, 3, 2, 1, 6, 7, 8, 9],
]
const expected = [
    [1, 2, 3, 9, 8, 7, 2, 4, 6],
    [4, 5, 6, 6, 5, 4, 8, 9, 7],
    [7, 8, 9, 3, 2, 1, 5, 3, 1],
    [1, 3, 5, 1, 2, 3, 9, 8, 7],
    [7, 9, 8, 4, 5, 6, 6, 5, 4],
    [6, 4, 2, 7, 8, 9, 3, 2, 1],
    [2, 4, 6, 1, 3, 5, 5, 4, 3],
    [8, 9, 7, 7, 9, 8, 2, 1, 6],
    [5, 3, 1, 6, 4, 2, 7, 8, 9],
]
it('returns a sorted array of box arrays', () => {
    expect(JSON.stringify(defineBoxes(input))).toEqual(JSON.stringify(expected))
})

// 测试 validateArray 函数
const validArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayWithRepeats = [3, 9, 1, 2, 8, 9, 5, 7, 4];
const arrayWithInvalidValues = [0, 1, 2, 3, 4, 5, 6, 7, 8];
it("returns true if array contains no duplicates", () => {
    expect(validateArray(validArray)).toBe(true);
});
it("returns false if array contains duplicates", () => {
    expect(validateArray(arrayWithRepeats)).toBe(false);
});
it("returns true if includes values 1 - 9", () => {
    expect(validateArray(validArray)).toBe(true);
});
it("returns true if includes values not 1 - 9", () => {
    expect(validateArray(arrayWithInvalidValues)).toBe(false);
});

// validateGameBoard 函数
const completeBoard = [
    [3, 9, 1, 2, 8, 6, 5, 7, 4],
    [4, 8, 7, 3, 5, 9, 1, 2, 6],
    [6, 5, 2, 7, 1, 4, 8, 3, 9],
    [8, 7, 5, 4, 3, 1, 6, 9, 2],
    [2, 1, 3, 9, 6, 7, 4, 8, 5],
    [9, 6, 4, 5, 2, 8, 7, 1, 3],
    [1, 4, 9, 6, 7, 3, 2, 5, 8],
    [5, 3, 8, 1, 4, 2, 9, 6, 7],
    [7, 2, 6, 8, 9, 5, 3, 4, 1],
];
const invalidRowBoard = [
    [3, 9, 1, 2, 8, 9, 5, 7, 4],
    [4, 8, 7, 3, 5, 6, 1, 2, 6],
    [6, 5, 2, 7, 1, 4, 8, 3, 9],
    [8, 7, 5, 4, 3, 1, 6, 9, 2],
    [2, 1, 3, 9, 6, 7, 4, 8, 5],
    [9, 6, 4, 5, 2, 8, 7, 1, 3],
    [1, 4, 9, 6, 7, 3, 2, 5, 8],
    [5, 3, 8, 1, 4, 2, 9, 6, 7],
    [7, 2, 6, 8, 9, 5, 3, 4, 1],
];
const invalidColumnBoard = [
    [3, 9, 1, 2, 8, 6, 5, 7, 4],
    [4, 8, 7, 3, 5, 9, 1, 2, 6],
    [6, 5, 2, 7, 1, 4, 8, 3, 9],
    [8, 7, 5, 4, 3, 1, 6, 9, 2],
    [2, 1, 3, 9, 6, 7, 4, 8, 5],
    [9, 6, 4, 5, 2, 8, 7, 1, 3],
    [4, 1, 9, 6, 7, 3, 2, 5, 8],
    [5, 3, 8, 1, 4, 2, 9, 6, 7],
    [7, 2, 6, 8, 9, 5, 3, 4, 1],
];
const invalidBoxBoard = [
    [3, 9, 1, 2, 8, 6, 5, 7, 4],
    [4, 7, 7, 3, 5, 9, 1, 2, 6],
    [6, 5, 2, 7, 1, 4, 8, 3, 9],
    [8, 8, 5, 4, 3, 1, 6, 9, 2],
    [2, 1, 3, 9, 6, 7, 4, 8, 5],
    [9, 6, 4, 5, 2, 8, 7, 1, 3],
    [1, 4, 9, 6, 7, 3, 2, 5, 8],
    [5, 3, 8, 1, 4, 2, 9, 6, 7],
    [7, 2, 6, 8, 9, 5, 3, 4, 1],
];
const tooLongBoard = [
    [3, 9, 1, 2, 8, 6, 5, 7, 4],
    [4, 8, 7, 3, 5, 9, 1, 2, 6],
    [6, 5, 2, 7, 1, 4, 8, 3, 9],
    [8, 7, 5, 4, 3, 1, 6, 9, 2],
    [2, 1, 3, 9, 6, 7, 4, 8, 5],
    [9, 6, 4, 5, 2, 8, 7, 1, 3],
    [1, 4, 9, 6, 7, 3, 2, 5, 8],
    [5, 3, 8, 1, 4, 2, 9, 6, 7],
    [7, 2, 6, 8, 9, 5, 3, 4, 1],
    [7, 2, 6, 8, 9, 5, 3, 4, 1],
];
it("returns true if entire game board is valid/complete", () => {
    expect(validateGameBoard(completeBoard)).toBe(true);
});
it("returns false if any part of game board is invalid", () => {
    expect(validateGameBoard(invalidRowBoard)).toBe(false);
    expect(validateGameBoard(invalidColumnBoard)).toBe(false);
    expect(validateGameBoard(invalidBoxBoard)).toBe(false);
    expect(validateGameBoard(tooLongBoard)).toBe(false);
});