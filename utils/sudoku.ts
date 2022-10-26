
export const checkRowLength = (rowArray: Array<number>): boolean => {
    return rowArray.length === 9
}

export const defineColumns = (arrayOfRows: Array<Array<number>>): Array<Array<number>> => {
    // 创建 arrayOfColumns 数组来存储排序的列
    let arrayOfColumns: Array<Array<number>> = new Array<Array<number>>()
    // 用空数组填充 arrayOfColumns 数组
    arrayOfRows.forEach(() => {
        arrayOfColumns.push([])
    })

    // 遍历每一行，将数值排序到列数组中
    arrayOfRows.forEach((row) => {
        row.forEach((value, i) => {
            // 将当前行索引的值添加到同一索引的列数组中
            arrayOfColumns[i].push(value)
        })
    })
    return arrayOfColumns
}

export const defineBoxes = (arrayOfRows: Array<Array<number>>): Array<Array<number>> => {
    // 定义一个 arrayOfBoxes 数组来存储排序后的盒子
    const arrayOfBoxes: Array<Array<number>> = new Array<Array<number>>()
    // 为 arrayOfBoxes 每行添加空数组
    arrayOfRows.forEach(() => {
        arrayOfBoxes.push([])
    })

    // box，box 将是 arrayOfBoxes 的索引，我们将把一个排序的值插入其中
    let box = 0
    // boxSet, boxSet 将告诉我们需要插入哪一 "行 "的 box
    let boxSet = 0
    // count, 计数将告诉我们何时进入下一个盒子
    let count = 1

    // 从 arrayOfRows 中定义 boxsets
    arrayOfRows.forEach((row, i) => {
        // 顶部的三个盒子
        if (i < 3) boxSet = 0
        // 中间三个盒子
        if (i >= 3 && i < 6) boxSet = 3
        // 底部三个盒子
        if (i > 5) boxSet = 6

        // 将每一行的值排序到新的数组中
        row.forEach((value) => {
            // 如果 box 能被 3 整除则到下一个盒子
            if (box % 3 === 0) box = boxSet

            arrayOfBoxes[box].push(value)

            if (count % 3 === 0) box++

            count++
        })
    })

    return arrayOfBoxes
}

export const validateArray = (array: Array<number>): boolean => {
    // 必须包括的所有数字
    const range = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // 初始化空数组以检查是否有重复的内容
    let checkArray: Array<number> = new Array<number>()

    let isValid = true

    array.forEach((value) => {
        if (checkArray.includes(value)) isValid = false
        checkArray.push(value)
    })

    range.forEach((digit) => {
        if (!checkArray.includes(digit)) isValid = false
    })

    return isValid
}

export const validateGameBoard = (boardArray: Array<Array<number>>): boolean => {
    let isValid = checkBoardSize(boardArray)

    const columns = defineColumns(boardArray)
    const boxes = defineBoxes(boardArray)

    // 验证 boardArray 的每一行
    boardArray.forEach((row) => {
        if (!validateArray(row)) isValid = false
    })

    // 验证每一列
    columns.forEach((column) => {
        if (!validateArray(column)) isValid = false
    })

    // 验证每个盒子
    boxes.forEach((box) => {
        if (!validateArray(box)) isValid = false
    })

    return isValid
}

const checkBoardSize = (boardArray: Array<Array<number>>): boolean => {
    if (boardArray.length !== 9) {
        return false
    }

    let isValid = true

    boardArray.forEach((row) => {
        if (!checkRowLength(row)) isValid = false
    })
    return isValid
}