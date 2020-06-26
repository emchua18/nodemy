let arrOrigin = [1,8,5,2,7,6,9,2,6,13]
let arrInc = [...arrOrigin]
let arrDec = [...arrOrigin]
arrInc.sort( (a, b) => a - b )
arrDec.sort( (a, b) => b - a )
console.log(`Mảng gốc: ${arrOrigin}`)
console.log(`Mảng được sắp tăng dần: ${arrInc}`)
console.log(`Mảng được sắp giảm dần: ${arrDec}`)