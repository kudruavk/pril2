// for (var i = 0; i <=10; i++) {
//    console.log(i);
   
// }
// console.log('теперь парные числа')
// for (var count = 2; count < 11; count += 2) {
//     console.log(count);
//   }
const btr = document.querySelector('.zadat')
const box = document.querySelector('.big')

const list = document.createElement('ol')
box.append(list)
btr.addEventListener('click', () =>{
    let text = document.querySelector('.inText').value
    console.log(text)
    let li = document.createElement('li')
    li.innerHTML = `${text}`
    list.append(li)
    document.querySelector('.inText').value = ''
})