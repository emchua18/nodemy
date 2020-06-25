let arr = [1,5,7,8,9,15,8]
let oddNumber = ``
let evenNumber = ``
let oddFlag = true
let evenFlag = true
let sumDivide5 = 0
let no5 = []
let count8 = 0;
for (let value of arr) {
    if (value % 2 === 0) {
        if (evenFlag) {evenNumber += value; evenFlag = false;} 
        else evenNumber += ' , ' + value         
    }
    else {
        if (oddFlag) {oddNumber += value; oddFlag = false;} 
        else oddNumber += ' , ' + value 
    } 
    if (value % 5 === 0) sumDivide5 += value 
}
for (const key in arr) {
    if (arr[key] / 5 === 1) no5.push(key)
    if (arr[key] / 8 === 1)  count8++
}
console.log(`Mảng Gốc là    : [${arr}]`)
console.log(`Các số lẻ là   : ${oddNumber}`)
console.log(`Các số chẵn là : ${evenNumber}`)
console.log(`Tổng chia hết 5: ${sumDivide5}`)
console.log(`Tích 3 số đầu của mảng: ${arr[0]*arr[1]*arr[2]}`)
console.log(`Tổng 3 số cuối của mảng: ${arr[arr.length-1]+arr[arr.length-2]+arr[arr.length-3]}`)
console.log(`Phần tử chứa số 05 đứng tại vị trí thứ -> ${Number(no5)+1} <- của mảng`)
console.log(`Tổng số 8 trong mảng: ${count8}`)
console.log(`           

                ----*----            HELLO NODEJS WORLD          ----*----            `)
