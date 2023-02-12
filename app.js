// Homework first part


// Генератор массива с тегами для задачи

function arrayGenerator(arrayLenght) {
    var arraySolution = []
    for (let i = 0; i < arrayLenght; i++) {
        switch (Math.floor(Math.random() * 10)) {
            case 0:
                arraySolution.push('div')
                break
            case 1:
                arraySolution.push('span')
                break
            case 2:
                arraySolution.push('h1')
                break
            case 3:
                arraySolution.push('p')
                break
            case 4:
                arraySolution.push('a')
                break
            case 5:
                arraySolution.push('li')
                break
            case 6:
                arraySolution.push('ul')
                break
            case 7:
                arraySolution.push('ol')
                break
            case 8:
                arraySolution.push('button')
                break
            case 9:
                arraySolution.push('img')
                break

        }
    }
    return arraySolution
}

// Можно менять значение следующей строки для генерации большего массива
var arrayLenght = 20
var arrayExample1 = arrayGenerator(arrayLenght)
console.log('Пример массива для решения первой задачи\nЭтот массив генерируется рандомно')
console.log(arrayExample1)
var solution1 = {}

for (var el of arrayExample1) {
    if (Object.keys(solution1).includes(el)) {
        solution1[el] += 1
    } else {
        solution1[el] = 1
    }
}

console.log('Решение первой задачи')
console.log(solution1)


// Homework second part

var arrayExample2 = ['name', 'John', 'lastname', 'Wick', 'age', 23]
console.log('Пример массива для решения второй задачи')
var solution2 = {}

for (var i = 0; i < arrayExample2.length; i += 2) {
    solution2[arrayExample2[i]] = arrayExample2[i + 1]
}
console.log("Решение второй задачи")
console.log(solution2)