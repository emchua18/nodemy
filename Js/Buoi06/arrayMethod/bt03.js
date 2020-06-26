let persons =[{
	name: 'Trung',
	class: 'Nodemy01',
	dateJoin: '05-02-2020',
    age: 20
}, {
	name: 'Phong',
    class: 'Nodemy01',
    dateJoin: '06-01-2020',
    age: 19
}, {
	name: 'Nam',
    class: 'Nodemy02',
    dateJoin: '25-01-2020',
    age: 20
}]
let ageInc = [...persons]
let dateJoinRoom = [...persons]
let beforeFebFilter = [...persons]
ageInc.sort( (a, b) => parseInt(a["age"]) - parseInt(b["age"]) )

function reverseString(str) {
    return str.split("-").reverse().join("-");
}
dateJoinRoom.sort( (a, b) => Date.parse(reverseString(b["dateJoin"])) - Date.parse(reverseString(a["dateJoin"])) )
findFilter = beforeFebFilter.filter(item => { 
    let tempMonth = new Date( Date.parse(reverseString(item["dateJoin"])) ) 
    if (tempMonth.getMonth() < 1)  return item 
} ) 

let upcaseName = persons.map(item => ({
    name: item["name"].toUpperCase(),
    class: item["class"],
    dateJoin: item["dateJoin"],
    age: item["age"],
}))

console.log(`Danh sách thành viên gốc`) 
console.table(persons)
console.log(`Danh sách tuổi tăng dần`) 
console.table(ageInc)
console.log(`Danh sách ngày tăng dần`) 
console.table(dateJoinRoom)
console.log(`Hoc vien truoc thang 2`) 
console.table(findFilter)
console.log(`Viet Hoa Hoc Vien`) 
console.table(upcaseName)