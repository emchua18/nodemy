let arr = [1,5,7,8,9,15] 
let arrOrigin = [...arr]
let arrModify = [...arr]
let arrMulti2 = [...arr]
let evenNumber = arr.filter(item => item % 2 === 0)
let oddNumber = arr.filter(item => item % 2 !== 0)
let larger5 = arr.filter(item => item >= 5)
let divide5 = arr.filter(item => item % 5 === 0)
let larger5Filter = arr.filter((item) => (item > 5)&&(item % 5 === 0))
let larger5Plus = larger5Filter.map(item => item += 1)
arrModify.splice(2,1)
let deleteItem = [...arrModify]
arrModify.push(35)
for (const key in arrMulti2) arrMulti2[key] *= 2 

console.log(`Mảng gốc là : [${arrOrigin}]`)
console.log(`Các số chẵn của mảng : ${evenNumber}`)
console.log(`Các số lẻ của mảng : ${oddNumber}`)
console.log(`Các số >= 5 của mảng : ${larger5}`)
console.log(`Các số chia hết 5 của mảng : ${divide5}`)
console.log(`Tăng 1 số chia hết 5 của mảng : ${larger5Plus}`)
console.log(`Sao chép mảng từ vị trí thứ 3 : ${arr.slice(2)}`)
console.log(`Xóa phần tử thứ 3 trong mảng : ${deleteItem}`)
console.log(`Thêm 1 phần tử cuối mảng : ${arrModify}`)
console.log(`Nhân đôi mảng với for : ${arrMulti2}`)