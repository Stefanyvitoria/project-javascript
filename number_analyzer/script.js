var numbers = []

function addNum() {
    let num = document.getElementById('num').value

    if (num.length == 0 || num > 100 || num < 1) {
        window.alert("Number invalid!")
        return
    }
    numbers.push(num)

    let item = document.createElement('option')
    item.text = `Number ${num} added!`
    let sel = document.getElementById('sel')
    
    if (sel.innerHTML.search('Empty') != -1) {
        sel.innerHTML = ''
    }
    sel.appendChild(item)
}

function finish() {
    let res = document.getElementById('res')

    res.innerHTML = `${numbers.length} numbers added in total<br> <br>`

    let max = 1
    let min = 100
    for (let key in numbers) {
        if (Number(numbers[key]) > max) {
            max = Number(numbers[key])
        }
        if (Number(numbers[key]) < min) {
            min = Number(numbers[key])
        }
    } 

    res.innerHTML += `the highest value was ${max} <br> <br>`
    res.innerHTML += `the highest lowest value was ${min} <br> <br>`
    res.innerHTML += `The sum of all values is ${sum(numbers)}<br> <br>`
    res.innerHTML += `The average of the values is ${sum(numbers)/numbers.length}`

}

function sum( nums) {
    let s = 0 
    for (let n = 0; n<nums.length; n++){
        s += Number(nums[n])
    }
    return s
}